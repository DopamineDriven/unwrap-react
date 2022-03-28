const withTM = require("next-transpile-modules")(["unwrap"]);

module.exports = withTM({
  reactStrictMode: true,
});
