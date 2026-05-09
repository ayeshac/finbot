

export async function sendMessage(prompt: string): Promise<string> {
    const response = await fetch('finbot-production-ae5d.up.railway.app/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })
    const data = await response.json()
    return data.reply
}