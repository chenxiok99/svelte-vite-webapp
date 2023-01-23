module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  customSyntax: "postcss-less",
  plugins: [
    'stylelint-order',
    'stylelint-prettier',
  ],
  rules: {
    "selector-type-no-unknown": null,
    "selector-class-pattern": null,
    "color-function-notation": null,
  }
}
