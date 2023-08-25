module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: false,
      },
    ],
  },
};
