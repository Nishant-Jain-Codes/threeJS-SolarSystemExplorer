import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();
const router = express.Router();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello From ChatGPT ROUTES' });
});
router.route('/').post(async (req, res) => {
    try {
        // Get the prompt and selected planet name from the request body
        const { prompt, selectedPlanet } = req.body;

        // Construct a chat message with the selected planet name
        const chatMessage = `Regarding ${selectedPlanet}, please provide a brief and specific response: ${prompt}`;

        // Use OpenAI to generate a response based on the chat message
        const response =  await openai.completions.create({
            model: 'davinci',
            engine: 'text-davinci-002', // You can choose an appropriate engine
            prompt: chatMessage,
            max_tokens: 50, // Adjust the number of tokens as needed
        });

        // Extract and send the generated response
        const generatedResponse = response.choices[0].text;
        res.status(200).json({ message: generatedResponse });
    } catch (err) {
        const errorMessages = {
            'insufficient_quota': 'You exceeded your current quota, please check your plan and billing details.',
        };
        console.error(err);
        if (err.code in errorMessages) {
            const errorMessage = errorMessages[err.code];
            res.status(400).json({ message: errorMessage });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});
export default router;