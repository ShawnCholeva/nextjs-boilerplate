const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require("resolve");

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  };

  if (config.env.coverage) {
    require("@cypress/code-coverage/task")(on, config);
  }

  on("file:preprocessor", cucumber(options));

  return config;
};
