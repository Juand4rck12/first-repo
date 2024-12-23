import express from 'express'
import axios from 'axios'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

const openAIURL = "https://api.openai.com/v1/chat/completions";

app.use(express.json())

app.post('/profe-node', async (req, res) => {
    const { pregunta } = req.body;
    console.log(pregunta)
    try {
        const response = await axios.post(openAIURL, {
            "model": "gpt-4o-mini",
            "messages": [{
                "role": "user",
                "content": `${pregunta}`
            }],
            "temperature": 0.7
        }, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        })
        console.log(req.body.pregunta)
        res.send(response.data.choices[0].message.content)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})