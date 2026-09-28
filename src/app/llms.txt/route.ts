import { env } from "@/env.mjs";
import { buildLlmsTxt } from "@/lib/llms";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL ?? "https://reinhardterasmus.info";

export function GET(): Response {
  return new Response(buildLlmsTxt(BASE_URL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
