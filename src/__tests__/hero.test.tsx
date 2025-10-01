import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /Full-stack platforms built for modern agriculture/i,
      }),
    ).toBeInTheDocument();
  });

  it("displays CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Book a Discovery Call/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View Projects/i })).toBeInTheDocument();
  });
});




