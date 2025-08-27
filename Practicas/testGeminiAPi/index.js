import express from 'express'
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3000;
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

app.use(express.json());

app.post('/ask-gemini', async (req, res) => {
    try {
        const {question} = req.body;
        if (!question) {
            return res.status(500).json({ error: 'Debes proporcionar una pregunta!' });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite',
            contents: question,
            config: {
                thinkingConfig: 0
            }
        });

        res.status(200).json({
            answer: response.text
        })

    } catch (error) {
        console.error("Error en la API: ", error);
        res.status(500).json({
            error: "Error al generar la respuesta: " + error.message
        });
    }
});

async function main() {
    const response = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash-lite',
        contents: 'Saludame, me llamo Juan Diego',
        config: {
            thinkingConfig: {
                thinkingBudget: 0, // Deshabilita el pensamiento
            },
        }
    });
    console.log(response.text);
}

// main();

app.get('/test', (req, res) => {
    try {
        console.log("Solicitud recibida!");
        res.status(200).json({
            message: "Api funcionando!"
        })
    } catch (error) {
        console.error("Ocurrio un error al hacer el fetch del endpoint: ", error);
    }
});


app.listen(PORT, () => {
    console.log(`🚀 Server running in port ${PORT}`);
});