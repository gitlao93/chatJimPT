import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ChatArea () {
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChat = async (e) => {
        e.preventDefault();

        // try{
        //     // const response = await axios.post('http://127.0.0.1:8000/api/message/2',
        //     //     {
        //     //       content: chat
        //     //     },
        //     //     {
        //     //       headers: {
        //     //         'Accept': 'application/vnd.api+json',
        //     //         'Content-Type': 'application/vnd.api+json',
        //     //         Authorization: `Bearer ${Cookies.get('token')}`,
        //     //       }
        //     //     }
        //     //   );

        //     // if(response.status === 200){
        //     //     console.log('sent');
        //     // }else{
        //     //     console.log('error');
        //     }
        // }catch(error){
        //     // console.log(error);
        // }

    }

    useEffect(() => {
        // const fetchConversationMessage = async () => {
        //     try {
        //         const messageresponse = await axios.get('http://127.0.0.1:8000/api/convo_message', {
        //             headers: {
        //                 Authorization: `Bearer ${Cookies.get('token')}`,
        //             },
        //         });
                
        //         if (messageresponse.status === 200) {
        //             setMessages(messageresponse.data.data);
        //         } else {
        //             console.log('Error fetching conversations');
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // fetchConversationMessage();
        
    }, []);

   
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
                    
                    <div className={`chat-message-wrapper ${message.message_from == Cookies.get('id') ? 'sender' : 'reply'}`} key={index} >
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
                                <p className="chatters-message text-white">{message.message}</p>
                            </div>
                            <span className="text-white">{message.created_at}</span>
                        </div>
                    </div>
                ))}
            </div>
                {/* Chat body container  -- ends here*/}

            {/* Submit container */}
            <div className="chat-submit-container border-bottom-primary p-3">
            <form className="row h-100" onSubmit={handleChat}>
                <div className="col-9">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Message" id="floatingTextarea2" value={chat} onChange={(e) => setChat(e.target.value)}/>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary w-100 h-100 mx-auto">Send</button>
                </div>
                </form>
            </div>
            {/* Submit container -- ends here */}
            
        </div>
    );
}