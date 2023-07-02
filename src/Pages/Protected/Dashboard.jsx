import React, { useState } from 'react';
import ChatArea from "../../components/ChatArea";
import ConvoList from "../../components/ConvoList";
import UsersList from '../../components/UsersList'


export default function Dashboard() {

    const [selectedConversation, setSelectedConversation] = useState(0);
    const [selectedConversationName, setSelectedConversationName] = useState('');
    const [selectedUser, setSelectedUser] = useState(0);
    const [selectedUserName, setSelectedUserName] = useState('');

    const handleSelectConversation = (conversationId,conversationName) => {
        setSelectedConversation(conversationId);
        setSelectedConversationName(conversationName)
        setSelectedUser(0)
    };
    const handleSelectConversationname = (conversationName) => {
        setSelectedConversationName(conversationName)
        setSelectedUserName('')
    };

    const handleSelectUser = (userId) => {
        setSelectedUser(userId)
        setSelectedConversation(0);
    };

    const handleSelectUserName = (userName) => {
        setSelectedUserName(userName);
        setSelectedConversationName('')
    };

    

    return (
        <div className="container-fluid bg-dark h-88 p-0 overflow-hidden">
            <div className="d-flex h-100 justify-content-between">
                <div className='d-flex flex-column'>
                    <ConvoList onSelectConversation={handleSelectConversation} onSelectConversationName={handleSelectConversationname}/>
                    <UsersList onSelectUser={handleSelectUser} onSelectUserName={handleSelectUserName}/>
                </div>
                
                <ChatArea conversationId={selectedConversation} conversationName={selectedConversationName} userId={selectedUser} userName={selectedUserName}/>
            </div>
        </div>
    );
}