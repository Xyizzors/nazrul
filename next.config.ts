import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const config: NextConfig = {
  // Production: plain static files in out/ that any host (including cPanel) can serve.
  // Development: a normal server, which the control panel needs in order to save files.
  output: isDev ? undefined : "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Files named page.dev.tsx / route.dev.ts (the control panel and its API) only exist in development,
  // so they can never end up on the live website.
  pageExtensions: isDev ? ["tsx", "ts", "dev.tsx", "dev.ts"] : ["tsx", "ts"],
};

export default config;
