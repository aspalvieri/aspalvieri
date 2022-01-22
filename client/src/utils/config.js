const VERSION = "1.0.0"; //Change this to force-log everyone

const configs = {
  test: {
    SERVER_URI: "http://localhost:5000",
    VERSION
  },
  development: {
    SERVER_URI: "http://localhost:5000",
    VERSION
  },
  production: {
    SERVER_URI: "https://api-dot-plucky-rarity-339004.uc.r.appspot.com",
    VERSION
  },
};

module.exports.config = configs[process.env.NODE_ENV];
