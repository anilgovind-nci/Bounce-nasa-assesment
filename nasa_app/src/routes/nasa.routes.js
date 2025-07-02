const express = require('express');
const router = express.Router();
const { getAPOD } = require('../controllers/nasa.controller');
const { query } = require('express-validator');

/**
 * @swagger
 * /api/nasa/apod:
 *   get:
 *     summary: Get NASA Astronomy Picture of the Day
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Date in YYYY-MM-DD format
 *     responses:
 *       200:
 *         description: APOD data
 *       400:
 *         description: Bad request
 */


// Allow optional `date` param (YYYY-MM-DD)

router.get(
  '/apod',
  [
    query('date')
      .optional()
      .isISO8601()
      .withMessage('Date must be in YYYY-MM-DD format'),
  ],
  getAPOD
);

module.exports = router;
