module.exports = {
  // DEBUG: '*',
  NODE_ENV: 'development',
  MATHJAX: 1,
  REDIS_URL: 'redis://localhost:6379/crowi',
  ELASTICSEARCH_URI: 'http://localhost:9200/crowi',
  PLUGIN_NAMES_TOBE_LOADED: [
    'crowi-plugin-lsx',
    'crowi-plugin-pukiwiki-like-linker',
  ]
}
