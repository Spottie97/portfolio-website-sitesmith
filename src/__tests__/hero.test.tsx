import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /Building Digital Products That Scale/i,
      }),
    ).toBeInTheDocument();
  });

  it("displays CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Let's Discuss Your Project/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View My Work/i })).toBeInTheDocument();
  });
});
