import express from 'express';import bodyParser from 'body-parser';
const app = express();
// Middleware
app.use(bodyParser.json());
// Routes
app.use('/api', authorRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
