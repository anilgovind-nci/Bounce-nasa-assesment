const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NASA_API_KEY: process.env.NASA_API_KEY,
  NASA_API_URL: process.env.NASA_API_URL,
};
