import express from 'express'
import 'dotenv/config'
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3000;
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Verifica que haya un prompt proporcioando antes de enviar la solicitud
 * @param {string} question - Prompt donde estará la pregunta o solicitud del usuario
 * @param {object} res - Objeto Express de respuesta
 * @returns - Estado HTTP 500 y mensaje de error indicando prompt obligatorio
 */
function verifyQuestion(question, res) {
    if (!question) {
        return res.status(500).json({ error: 'Debes proporcionar una pregunta!' });
    }
}

app.use(express.json());

app.post('/ask-gemini/stream', async (req, res) => {
    try {
        const { question } = req.body;

        verifyQuestion(question, res);
        const modelResponse = ai.models.generateContentStream({
            model: 'gemini-2.5-flash-lite',
            contents: question
        }); 

        // for await (const chunk of modelResponse) {

        // }

    } catch (error) {
        console.error("Error en la API: ", error);
        res.status(500).json({
            error: "Error al generar la respuesta: " + error
        });
    }
});

app.post('/ask-gemini', async (req, res) => {
    try {
        const { question } = req.body;
        verifyQuestion(question, req);

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite',
            contents: question,
            config: {
                thinkingConfig: 0
            }
        });

        console.log("Solicitud recibida: \n" + req.body.question)
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

// Forma normal de hacer una llamada a la API
async function main() {
    const response = await ai.models.generateContent({
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

async function mainStream() {
    const response = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash-lite',
        contents: 'Explicame la IA en pocas palabras, quiero saber como funciona la IA generativa.',
        config: {
            thinkingConfig: {
                thinkingBudget: 0
            }
        }
    });

    for await (const chunk of response) {
        console.log(chunk.text)
    }
}

await mainStream();

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


// app.listen(PORT, () => {
//     console.clear();
//     console.log(`🚀 Server running in port ${PORT}`);
// });