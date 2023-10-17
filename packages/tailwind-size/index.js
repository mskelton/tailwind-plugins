const plugin = require("tailwindcss/plugin");

const size = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      size: (value) => ({
        width: value,
        height: value,
      }),
    },
    { values: theme("width") },
  );
});

module.exports = size;
