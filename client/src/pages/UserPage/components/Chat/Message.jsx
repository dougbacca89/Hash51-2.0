import React from 'react';

const Message = (props) => {
    const {senderName, text} = props;
    return (
            <>
            <span>
            <div className="message-item" />
                <div><b>{senderName}</b> --
                {text} </div></span>
            </>
        );};

export default Message;
