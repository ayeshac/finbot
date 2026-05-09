import { useState } from "react";
import { Message } from "../types/chat"
import { sendMessage as sendMessageToGemini } from '../services/gemini'

const financeKeywords = ['money', 'invest', 'bank', 'loan', 'budget', 'finance', 'stock', 'saving', 'debt', 'tax', 'insurance', 'mortgage', 'crypto', 'fund', 'interest', 'income', 'expense']

const useChat = () => {
    const [messageData, setMessageData] = useState<Message[]>([{ id: '2', text: "Hi I'm FinBot! Ask me anything about personal finance.", role: "bot" }]);
    const [loading, setLoading] = useState(false)

    async function sendMessage(text: string) {
        const inputMessage = {
            id: Date.now().toString(),
            text: text,
            role: 'user' as const
        }

        const isFinanceRelated = financeKeywords.some(keyword =>
            text.toLowerCase().includes(keyword)
        )

        if (!isFinanceRelated) {
            setMessageData(prev => [...prev, inputMessage])
            setMessageData(prev => [...prev, {
                id: Date.now().toString(),
                text: "I can only answer finance related questions. Please ask me about investing, budgeting, loans, banking or personal finance!",
                role: 'bot' as const
            }])
            return
        }

        setMessageData(prev => [...prev, inputMessage])
        try {
            setLoading(true)
            const response = await sendMessageToGemini(text)
            const resMessage = {
                id: Date.now().toString(),
                text: response,
                role: 'bot' as const
            }
            setMessageData(prev => [...prev, resMessage])
        }
        catch (e) {
            const errorMessage = {
                id: Date.now().toString(),
                text: "Sorry, I'm having trouble responding. Please try again in a moment.",
                role: 'bot' as const
            }
            setMessageData(prev => [...prev, errorMessage])
            console.log("Error:", e)
        }
        finally {
            setLoading(false)
        }
    }

    return { messageData, loading, sendMessage }
}

export default useChat