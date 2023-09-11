import React from 'react';
import './ChatMessage.css';
import Avatar from "../../../assets/avatar";

//{    
//user: 'gpt'
//message: 'crie um roteiro de viagem'
//}
// user (user or chatgrp)
//message - a onde vai estar o prompt

export const ChatMessage = ({message}) =>{
    return(
<div className={`chat-menssage ${message.user === 'gpt'} && "chatgpt"`}>

    <div className="chat-message-center">
        <div className={
            `avatar ${message.user === 'gpt' && "chatgpt"}`
        }>
            {message.user === 'gpt' && (
                <Avatar/>
            )}
        </div>
        <div className="message">
                {message.message}
        </div>
    </div>
</div>
)}