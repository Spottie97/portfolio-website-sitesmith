"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema, type ContactFormValues } from "@/lib/validators";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTransitionMessage } from "@/components/hooks/use-transition-message";

const projectTypes = [
  "Farm management platform",
  "IoT sensor integration",
  "Crop analytics system",
  "Supply chain solution",
  "Marketplace platform",
  "Other",
];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, setState] = useTransitionMessage();
  const [mountedAt, setMountedAt] = useState(0);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      projectType: defaultService,
      availability: "",
      honeypot: "",
      elapsed: "0",
    },
  });

  useEffect(() => {
    setMountedAt(Date.now());
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setState({ status: "pending" });
    const elapsed = Date.now() - mountedAt;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, elapsed: String(elapsed) }),
    });

    if (!response.ok) {
      setState({
        status: "error",
        message: "We couldn’t send your message. Try again in a moment.",
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: "Thanks! I’ll reply within one business day.",
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" autoComplete="name" {...form.register("name")} />
        {form.formState.errors.name ? (
          <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" autoComplete="email" {...form.register("email")} />
        {form.formState.errors.email ? (
          <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <Input id="company" autoComplete="organization" {...form.register("company")} />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Project focus</label>
        <Select
          onValueChange={(value) => form.setValue("projectType", value)}
          defaultValue={defaultService}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a project type" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project summary
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Share the problem you’re solving, goals, and timelines..."
          {...form.register("message")}
        />
        {form.formState.errors.message ? (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="availability" className="text-sm font-medium">
          Preferred call time
        </label>
        <Input
          id="availability"
          placeholder="e.g. Weekday mornings or after 17:30"
          {...form.register("availability")}
        />
      </div>

      <input type="text" tabIndex={-1} className="hidden" {...form.register("honeypot")} />

      <Button type="submit" disabled={state.status === "pending"}>
        {state.status === "pending" ? "Sending..." : "Send message"}
      </Button>

      <p
        className={cn(
          "text-sm",
          state.status === "success"
            ? "text-emerald-600"
            : state.status === "error"
              ? "text-destructive"
              : "text-muted-foreground",
        )}
      >
        {state.status === "idle" ? "Response within one business day." : state.message}
      </p>
    </form>
  );
}


