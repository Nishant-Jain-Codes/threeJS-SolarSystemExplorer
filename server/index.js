import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import chatGPTRoutes from './routes/chatGPT.routes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/chatGPT', chatGPTRoutes);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello From ChatGPT' });
});
app.listen(5000, () => console.log('Server Running on port 5000'));