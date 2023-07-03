import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ChatSubmit from './ChatSubmit';
import Pusher from 'pusher-js';

export default function ChatArea({ conversationId, conversationName, userId ,userName}) {
    
    const [conversationData, setConversationData] = useState([]);
    
    const [groupMembers, setGroupMembers] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            let response;
            if (conversationId !== 0) {
              response = await axios.get(`http://127.0.0.1:8000/api/conversation/${conversationId}`, {
                headers: {
                  'Accept': 'application/vnd.api+json',
                  'Content-Type': 'application/vnd.api+json',
                  Authorization: `Bearer ${Cookies.get('token')}`,
                },
              });
            } else if(userId !== 0  ) {
              response = await axios.get(`http://127.0.0.1:8000/api/user-conversation/${userId}`, {
                headers: {
                  'Accept': 'application/vnd.api+json',
                  'Content-Type': 'application/vnd.api+json',
                  Authorization: `Bearer ${Cookies.get('token')}`,
                },
              });
            }
            setConversationData(response.data.messages);
            setGroupMembers(null);
          } catch (error) {
            // setConversationData(['no message']);
          }
        };
    
        fetchData();
        
      }, [conversationId, userId]);
    
      useEffect(() => {
        const fetchMemberData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/group-members/${conversationId}`, {
              headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            });
            setGroupMembers(response.data.members[0].user_id);
            
          } catch (error) {
            console.error(error);
          }
        };
    
        if (conversationId !== 0) {
          fetchMemberData();
        }
      }, [conversationId]);

      useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('af6a08f9b1658b9a2db9', {
          cluster: 'ap1'
        });

        const channel = pusher.subscribe('notification');
        channel.bind('MessageNotificationt', function (data) {
          setConversationData((prevData) => [...prevData, data.message]);
          console.log(data)
        });

        // Define the callback function
        const handleNotification = (data) => {
          setConversationData((prevData) => [...prevData, data.message]);
          console.log(data)
        };

        // Bind the callback function to the 'MessageNotificationt' event
        channel.bind('messagenotification', handleNotification);

        // Clean up the subscription and callback when the component unmounts
        return () => {
          channel.unbind('messagenotification', handleNotification);
          pusher.unsubscribe('notification');
        };
      }, []);
    console.log(conversationData)

  return (
    <div className="d-flex flex-column w-80">
      {/* name container */}
      <div className="chat-name-container border-bottom-primary p-3">
        <h2 className="text-white"> {conversationName == '' ? userName : conversationName}</h2>
      </div>
      {/* name container  -- ends here*/}

      {/* Chat body container */}
      <div className="chat-message-container overflow-auto border-bottom-primary p-3">
        {
        conversationData == 'no message' ?
        (
          <div className="text-white text-center mt-5">No conversation</div>
        ) :
        (conversationData.map((message, index) => (
          <div className={`chat-message-wrapper ${message.sender_id == Cookies.get('id') ? 'sender' : 'reply'}`} key={index}>
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
        )))
        }
        {/* {messages.length === 0 && <p>{messagesIsEmpty}</p>} */}
      </div>
      {/* Chat body container  -- ends here*/}
      {
        conversationName == '' && userName == ''?  <div> </div>  : <ChatSubmit groupMembers={groupMembers} userId={userId} />
      }
      

    </div>
  );
}
