const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];