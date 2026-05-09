const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const botRules = "This is a financial Q/A bot and The bot's name is FinBot and Topics it covers are investing, budgeting, loans, banking, personal finance. Keep answers concise and beginner friendly so you should only respond to financial questions and out of financial you should say 'Sorry I only answer financial related Q/A'"


 const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: botRules
})

app.post('/api/chat',async (req,res)=>{
    try{    
        const prompt = req.body.prompt;
        const result = await model.generateContent(prompt)
        const text = result.response.text()
        res.json({ reply: text })
    }
    catch(e) {
        console.error('Gemini error:', e)
        res.status(200).json({ reply: "Sorry, I'm having trouble responding. Please try again." })
    }
    
   

})