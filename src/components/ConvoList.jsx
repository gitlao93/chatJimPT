import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ConvoList() {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/convo', {
                    headers: {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                });
                
                if (response.status === 200) {
                    
                    if (response.data.conversations.length == 0) {
                        setConversations([null]); // Set conversations to an empty array
                    } else {
                        setConversations(response.data.conversations);
                    }
                } else {
                    console.log('Error fetching conversations');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchConversations();
    }, []);


    return (
        <div className="border-end-primary w-20 px-1 py-0 overflow-auto">
            <h3 className="text-white px-4 py-2 sticky-top bg-dark">Conversation</h3>
            <ul className="list-group list-group-flush mt-3">
                
            {conversations.length === 0 ? (
                <li className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4">
                    No conversation
                </li>
                ) : (
                conversations.map((conversation) => (
                    <li key={conversation.convo_id} className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s"
                        className="rounded-circle convoListImg"
                        alt="Profile Photo"
                    />
                    <div className="ms-2 me-auto">
                        <div className="fw-bold me-3">{conversation.convo_name}</div>
                    </div>
                    </li>
                ))
                )}
               
            </ul>
        </div>
    );
}