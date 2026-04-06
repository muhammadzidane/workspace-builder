import { FlatCompat } from "@eslint/eslintrc";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
      "plugin:perfectionist/recommended-alphabetical-legacy",
      "plugin:sonarjs/recommended-legacy",
      "plugin:import/typescript",
      "plugin:security/recommended-legacy",
    ],
    plugins: ["perfectionist", "sonarjs"],
    rules: {
      // General
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn"] }],
      "no-restricted-syntax": [
        "error",
        "FunctionExpression",
        "FunctionDeclaration",
      ],

      // Libraries
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            type: {
              "@": "@",
              next: "next",
              react: "react",
            },
            value: {
              "@": ["@"],
              next: ["next"],
              react: ["react"],
            },
          },
          groups: [
            "react",
            "next",
            "@",
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          order: "asc",
          type: "alphabetical",
        },
      ],

      "perfectionist/sort-jsx-props": [
        "error",
        {
          groups: ["multiline", "unknown", "shorthand"],
          ignoreCase: true,
          order: "asc",
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
      "prettier/prettier": ["error", { endOfLine: "auto" }],

      // React
      "react/display-name": "off",
    },
  }),
];

export default eslintConfig;
