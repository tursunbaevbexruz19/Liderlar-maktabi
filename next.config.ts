import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // AVIF first — image weight, not JS, is what decides LCP on a 4G Android.
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
