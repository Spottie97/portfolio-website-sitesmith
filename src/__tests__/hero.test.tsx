import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /Digital Solutions That Grow With Your Farm/i,
      }),
    ).toBeInTheDocument();
  });

  it("displays CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Schedule Your Free Consultation/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See How Technology Can Transform Your Operation/i })).toBeInTheDocument();
  });
});




