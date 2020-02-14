/* config-overrides.js */

module.exports = function override(config, env) {
  config.module.rules = [
    {
      test: /\.yml$/,
      use: "js-yaml-loader",
    },
    ...config.module.rules,
  ];
  return config;
};
