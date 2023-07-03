import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function ChatSubmit ({ groupMembers, userId }) {
    const [chat, setChat] = useState('');
    const handleChat = async (e) => {
        e.preventDefault();
        console.log('gm' + groupMembers)
        console.log('u' + userId)
        try{

            if(groupMembers !== null){
                const response = await axios.post(`http://127.0.0.1:8000/api/message/${groupMembers}`,
                    {
                    content: chat
                    },
                    {
                    headers: {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }
                    }
                );

            if(response.status === 200){
                console.log('sent');
            }else{
                console.log('error');
            }


            }else if(userId !== 0){
                const response = await axios.post(`http://127.0.0.1:8000/api/message/${userId}`,
                    {
                    content: chat
                    },
                    {
                    headers: {
                        'Accept': 'application/vnd.api+json',
                        'Content-Type': 'application/vnd.api+json',
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }
                    }
                );

                if(response.status === 200){
                    console.log('sent');
                }else{
                    console.log('error');
                }
            }

            setChat('');
            
        }catch(error){
            console.log(error,'asdf');
        }

    }
    return (
        <>
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
        </>
    );

}