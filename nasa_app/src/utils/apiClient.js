const axios = require('axios');
const config = require('../config');


const apiClient = axios.create({
  baseURL: config.NASA_API_URL, // base path
  timeout: 5000,
});

module.exports = apiClient;
