import React from 'react'

interface Props {
    loading: boolean
}

function TypingIndicator({ loading }: Props) {
    return (
        <>
            {loading && <div className="typing-indicator">FinBot is typing...</div>}
        </>
    )
}

export default TypingIndicator