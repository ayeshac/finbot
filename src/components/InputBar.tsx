
import React, { useState, useRef, useEffect } from 'react'


interface Props {
    sendMessage: (text: string) => void
    loading: boolean
}

function InputBar({ sendMessage, loading }: Props) {
    const [msgText, setMsgText] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)
    const sendClicked = () => {
        sendMessage(msgText)
        setMsgText('')
        
    }

    useEffect(() => {
        if (!loading) {
            inputRef.current?.focus()
        }
    }, [loading])
    
    return (
        <div className="input-bar">
            <input
                ref={inputRef}
                onKeyDown={(e) => e.key === 'Enter' && sendClicked()}
                disabled={loading}
                type='text'
                onChange={(e) => setMsgText(e.target.value)}
                value={msgText}
                placeholder="Ask me anything about finance..."
            />
            <button disabled={loading} onClick={() => sendClicked()}>Send</button>
        </div>
    )
}

export default InputBar

