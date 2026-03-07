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

const mode = import.meta.env.MODE;
const defaultConfig = configs[mode] || configs.production;

export const config = {
  ...defaultConfig,
  RECAPTCHA_SITE_KEY:
    import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LfIexkhAAAAAO3-jubL6T_3W9wNgUsYjI0mL-0b"
};
