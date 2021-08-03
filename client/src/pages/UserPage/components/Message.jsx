import React from 'react';

const Message = (props) => {

    const {senderName, text} = props;
    return (
            <>
            <div className="message-item" />
‍
                <div><b>{senderName}</b></div>
‍
                <span>{text}</span>
            </>
        );};

export default Message;
