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
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                });
                
                if (response.status === 200) {
                    setConversations(response.data);
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
            
                {conversations.map((conversation) => (
                        <li key={conversation.id} className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s" className="rounded-circle convoListImg" alt="Profile Photo" />
                            <div className="ms-2 me-auto">
                                <div className="fw-bold me-3">{conversation.name}</div>
                                <div className="fw-bold me-3">{conversation.email}</div>
                            </div>
                        </li>
                    ))}
               
            </ul>
        </div>
    );
}