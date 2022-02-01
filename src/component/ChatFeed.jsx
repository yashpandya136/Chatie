import React from "react";
import MessageForm from "./MessageForm";
import MyMessageForm from "./MyMessageForm";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && [activeChat];

const renderMessages = () => {
    const keys = Object.keys(messages);

    console.log(keys);
}

renderMessages();
    return(
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;