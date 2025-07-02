const apiClient = require('../utils/apiClient');
const config = require('../config');

exports.fetchAPOD = async (queryParams = {}) => {
  // Allowed params based on NASA API docs
  const allowedParams = ['date', 'start_date', 'end_date', 'count', 'thumbs'];

  // Filter queryParams to only allowed keys
  const filteredParams = {};
  for (const key of allowedParams) {
    if (queryParams[key] !== undefined) {
      filteredParams[key] = queryParams[key];
    }
  }

  // Add api_key to params
  filteredParams.api_key = config.NASA_API_KEY;

  const response = await apiClient.get('/apod', {
    params: filteredParams,
  });

  return response.data;
};
