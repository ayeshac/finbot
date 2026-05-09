import React from 'react'
import { Message } from '../types/chat';

interface Props{
    message:Message
}
function MessageBubble({message}:Props){
    return(
        <div className={message.role==='user' ? 'bubble-user' : 'bubble-bot'}>
            {`${message.role} : ${message.text}`}
        </div>
    )
}

export default MessageBubble
