const withTM = require("next-transpile-modules")(["ui", "eslint"]);
// @ts-check
/**
 * @type {import('next/dist/server/config').NextConfig}
 **/

module.exports = withTM({
  experimental: {
    esmExternals: "loose"
  },
  reactStrictMode: true,
});
