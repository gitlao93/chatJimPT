import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ChatSubmit from './ChatSubmit';

export default function ChatArea ({ conversationId }) {
    const [messages, setMessages] = useState([]);

   
    useEffect(() => {
        const fetchConversationMessage = async () => {
            try {
                const messageresponse = await axios.get(`http://127.0.0.1:8000/api/conversation/${conversationId}`, {
                    headers: {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                });

                if (messageresponse.status === 200) {
                    setMessages(messageresponse.data.messages);
                } else {
                    console.log('Error fetching conversations');
                }
            } catch (error) {
                console.error(error,'notfound');
            }
        };

        fetchConversationMessage();
        
    }, [conversationId]);

   
    return (
        <div className="d-flex flex-column w-80">
            {/* name container container */}
            <div className="chat-name-container border-bottom-primary p-3">
                <h2 className="text-white">Name of the friend</h2>
            </div>
            {/* name container  -- ends here*/}

            {/* Chat body container */}
            <div className="chat-message-container overflow-auto border-bottom-primary p-3">
                {messages.map((message, index) => (
                    
                    <div className={`chat-message-wrapper ${message.sender_id == Cookies.get('id') ? 'sender' : 'reply'}`} key={index} >
                        <div className="chatters-info-container">
                            <div className="chatters-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s"
                                    className="rounded-circle convoListImg"
                                    alt="Profile Photo"
                                />
                            </div>
                        </div>
                        <div className="chatters-message-container">
                            <div className="chatters-message-wrapper">
                                <p className="chatters-message text-white">{message.content}</p>
                            </div>
                            <span className="text-white">{message.created_at}</span>
                        </div>
                    </div>
                ))}
            </div>
                {/* Chat body container  -- ends here*/}
            
            <ChatSubmit />
            
        </div>
    );
}