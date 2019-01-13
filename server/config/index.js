const envConfig = require(`./${process.env.NODE_ENV}`);

module.exports = Object.assign({
  limit: 50,
}, envConfig);
