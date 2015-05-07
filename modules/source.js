// Require the requirables, then send them to a modules object on the browser.
window.modules = {
  postcss: require('postcss'),
  spiffing: require('postcss-spiffing'),
  autoprefixer: require('autoprefixer-core'),
  simpleVars: require('postcss-simple-vars'),
  nested: require('postcss-nested')
};
