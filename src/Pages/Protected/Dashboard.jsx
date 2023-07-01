import React, { useState } from 'react';
import ChatArea from "../../components/ChatArea";
import ConvoList from "../../components/ConvoList";


export default function Dashboard() {

    const [selectedConversation, setSelectedConversation] = useState(0);

    const handleSelectConversation = (conversationId) => {
        setSelectedConversation(conversationId);
    };


    return (
        <div className="container-fluid bg-dark h-88 p-0 overflow-hidden">
            <div className="d-flex h-100 justify-content-between">
                <ConvoList onSelectConversation={handleSelectConversation} />
                <ChatArea conversationId={selectedConversation} />
            </div>
        </div>
    );
}