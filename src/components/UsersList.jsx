import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ConvoList({onSelectUser,onSelectUserName}) {
    const [users, setUsers] = useState([]);
    const [emptyUsers, setEmptyUsers] = useState('isNotEmpty');

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users', {
                    headers: {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                });
                if (response.status === 200) {
                    
                    if (response.data.users.length == 0) {
                        setEmptyUsers('No user'); // Set conversations to an empty array
                    } else {
                        setUsers(response.data.users);
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
    return(

        <div className="container-fluid container-h-50p border-end-primary w-20 px-1 py-0 overflow-auto">
                <h3 className="text-white px-4 py-2 sticky-top bg-dark">Users</h3>
                <ul className="list-group list-group-flush mt-3">
                    
                {emptyUsers === 'No user' ? (
                    <li className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4">
                        users
                    </li>
                    ) : (
                        users.map((user) => (
                        <li 
                            key={user.user_id} 
                            className="list-group-item d-flex justify-content-between align-items-start border-bottom-primary bg-dark text-white py-4"
                            onClick={() => {onSelectUser(user.user_id); onSelectUserName(user.name);}}
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIsT1WCsGPkc_2mLPTMmnUTYNt3Bk-3cfQhUJiVI&s"
                                className="rounded-circle convoListImg"
                                alt="Profile Photo"
                            />
                            <div className="ms-2 me-auto">
                                <div className="fw-bold me-3">{user.name}</div>
                                <span>{user.email}</span>
                            </div>
                        </li>
                    ))
                    )}
                
                </ul>
            </div>
    );

}