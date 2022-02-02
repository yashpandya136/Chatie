import React from "react";
import MessageForm from "./MessageForm";
import MyMessageForm from "./MyMessageForm";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && [activeChat];

const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
        const message = message[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const isMyMessage = userName === message.sender.username;

        return(
            <div key={`msg_${index}`} style={{width: '100%'}}>
            <div className="message-block">
            {
                isMyMessage
                ? <MyMessage message={message} />
                :<TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
            </div>
            <div className="read-receipts" style={{marginright: isMyMessage ? '18px' : '0px', marginleft: isMyMessage ? '0px' : '68px'}}>
                read-receipts
            </div>
            </div>
        );
    })
}


if(!chat) return 'Loading...';
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                < MessageForm {...props} chatID={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;