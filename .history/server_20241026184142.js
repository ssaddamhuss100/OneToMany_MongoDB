import express from 'express';
import bodyParser from 'body-parser';
import router from './src/controller/bookandAuthor.js';
import { connectUsingMongoose } from './src/db/mongoose';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Routes
app.use('/api', router);

// Start server
app.listen(PORT, () => {
    connectUsingMongoose();
    console.log(`Server is running on http://localhost:${PORT}`);
});
