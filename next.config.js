// next.config.
const {i18n} = require('./next-i18next.config');
const withCSS = require('next-postcss');

module.exports = withCSS({
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
  i18n
}