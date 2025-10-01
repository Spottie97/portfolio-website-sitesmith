import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

if (!globalThis.IntersectionObserver) {
  class MockIntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin = "0px";
    readonly thresholds: ReadonlyArray<number> = [];

    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  // @ts-expect-error - assigning to global for test environment
  globalThis.IntersectionObserver = MockIntersectionObserver;
}

// Cleanup after each test
afterEach(() => {
  cleanup();
});




