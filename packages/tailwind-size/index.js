const plugin = require("tailwindcss/plugin");

const size = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      s: (value) => ({
        width: value,
        height: value,
      }),
    },
    { values: theme("width") },
  );
});

module.exports = size;
