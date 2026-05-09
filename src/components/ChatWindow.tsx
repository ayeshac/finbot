import useChat from "../hooks/useChat"
import InputBar from "./InputBar"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"
import React, { useRef, useEffect } from 'react'

const ChatWindow = () => {
    const { messageData, sendMessage, loading } = useChat()
    const bottomRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messageData])
    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="online-dot"></div>
                <h2>FinBot 💰</h2>
            </div>
            <div className="messages-list">
                {messageData.map((item) => (
                    <MessageBubble message={item} key={item.id} />
                ))}
                  <div ref={bottomRef} />
            </div>
            <TypingIndicator loading={loading} />
            <InputBar sendMessage={sendMessage} loading={loading} />
          
        </div>
    )
}
export default ChatWindow