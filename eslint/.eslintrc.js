const fileExtensions = [".js", ".jsx", ".ts", ".tsx"];
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "airbnb-typescript",
    "airbnb/hooks",
    "airbnb/whitespace",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "import"],
  overrides: [
    {
      files: ["**/*.js", "*.jsx"],
      parser: "babel-eslint",
      parserOptions: {},
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-throw-literal": "off",
        strict: "off",
        "import/first": "off",
        "lines-around-directive": "off",
      },
      settings: {},
    },
  ],
  settings: {
    "import/extensions": fileExtensions,
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": {
      webpack: {
        config: "./config/webpack/environment.js",
      },
      alias: {
        map: [
          ["@", "./app/javascript"],
          ["@spec", "./spec/javascript"],
        ],
        extensions: fileExtensions,
      },
    },
  },
  rules: {
    "import/extensions": [1, "never"],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
  },
};
