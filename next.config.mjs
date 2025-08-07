import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['x.com', 'github.com'],
  },
  // You can add custom Next.js config here
};

export default withSentryConfig(nextConfig, {
  // Sentry project and org identifiers
  org: "osmangonidevx",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See: https://docs.sentry.io/product/crons/
  automaticVercelMonitors: true,

  // Optional: Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers
  // NOTE: Make sure this route doesn't conflict with middleware
  tunnelRoute: "/monitoring",

});
