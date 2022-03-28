const withTM = require("next-transpile-modules")(["unwrap", "eslint"]);
// @ts-check
/**
 * @type {import('next/dist/server/config').NextConfig}
 **/

module.exports = withTM({
  experimental: {
    esmExternals: "loose"
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true,
});
