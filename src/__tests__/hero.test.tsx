import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero Component", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /Business software, AI tooling, and games/i,
      }),
    ).toBeInTheDocument();
  });

  it("displays CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /View my work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get in touch/i })).toBeInTheDocument();
  });
});
