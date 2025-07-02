const { validationResult } = require('express-validator');
const nasaService = require('../services/nasa.service');

exports.getAPOD = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Pass all query parameters to the service
    const data = await nasaService.fetchAPOD(req.query);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
