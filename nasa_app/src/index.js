const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

dotenv.config();

const config = require('./config');
const nasaRoutes = require('./routes/nasa.routes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swaggerSpec');

const app = express();

// ✅ Allow requests from whitelisted frontend origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://52.213.19.57:3000',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Not allowed for origin ${origin}`));
    }
  },
}));

console.log('NASA API URL is:', config.NASA_API_URL);

// Middleware
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30,
});
app.use(limiter);

// API routes
app.use('/api/nasa', nasaRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the NASA APOD API!' });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(config.PORT, () => {
  logger.info(`🚀 Server running at http://localhost:${config.PORT}`);
});

