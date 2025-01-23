'use client'
import { useState } from "react"

export default function ChatList() {
    const [messageList, setMessageList] = useState([]);

    const nodeList = messageList.map(
        (message) => <ChatItem
            key={message.id}
            id={message.id}
            content={message.content}
            senderId={message.senderId}
            recipientId={message.recipientId}
        />
    )

    return (
        <div className="overflow-y-auto h-full flex flex-col-reverse px-4 pb-4 scrollbar-custom">
            {nodeList}
        </div>
    )

}