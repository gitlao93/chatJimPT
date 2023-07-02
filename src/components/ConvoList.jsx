import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function ConvoList({ onSelectConversation, onSelectConversationName }) {
    const [conversations, setConversations] = useState([]);
    const [emptyconvo, setConvo] = useState('isNotEmpy');
    const [hoveredConversationId, setHoveredConversationId] = useState(null);
    const [editedConvoName, setEditedConvoName] = useState("");
    const [editingConvoId, setEditingConvoId] = useState(null);

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
                        setConvo('empty'); // Set conversations to an empty array
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
    const updateConversationName = async (convoId, newName) => {
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/convo/${convoId}`, {
            convo_name: newName,
          }, {
            headers: {
              'Accept': 'application/vnd.api+json',
              'Content-Type': 'application/vnd.api+json',
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          });
    
          if (response.status === 200) {
            setConversations((prevConversations) =>
              prevConversations.map((conversation) => {
                if (conversation.convo_id === convoId) {
                  return { ...conversation, convo_name: newName };
                }
                return conversation;
              })
            );
          } else {
            console.log('Error updating conversation name');
          }
        } catch (error) {
          console.error(error);
        }
      };

      const handleKeyDown = (e, convoId) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          updateConversationName(convoId, editedConvoName);
          setEditingConvoId(null);
        }
      };

      
    return (
        
            <div className="container-fluid container-h-50p border-end-primary w-20 px-1 py-0 overflow-auto">
                <h3 className="text-white px-4 py-2 sticky-top bg-dark">Conversation</h3>
                <ul className="list-group list-group-flush mt-3">
                    
                {emptyconvo === 'empty' ? (
                    <li className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4">
                        No conversation
                    </li>
                    ) : (
                    conversations.map((conversation) => (
                        <li
                        key={conversation.convo_id}
                        className={`list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4 ${
                            conversation.convo_id === hoveredConversationId ? 'hovered' : ''
                        }`}
                        onMouseEnter={() => setHoveredConversationId(conversation.convo_id)}
                        onMouseLeave={() => setHoveredConversationId(null)}
                        onClick={() => {onSelectConversation(conversation.convo_id); onSelectConversationName(conversation.convo_name);}}
                        >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s"
                            className="rounded-circle convoListImg"
                            alt="Profile Photo"
                        />
                        <div className="ms-2 me-auto">
                            {editingConvoId === conversation.convo_id ? (
                            <input
                                type="text"
                                value={editedConvoName}
                                onChange={(e) => setEditedConvoName(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, conversation.convo_id)}
                            />
                            ) : (
                            <div className="fw-bold me-3">
                                {conversation.convo_name}
                                <br />
                                <span className="edit" onClick={() => setEditingConvoId(conversation.convo_id)}>
                                edit
                                </span>
                            </div>
                            )}
                        </div>
                        </li>
                    ))
                    )}
                
                </ul>
            </div>
            
        
    );
}