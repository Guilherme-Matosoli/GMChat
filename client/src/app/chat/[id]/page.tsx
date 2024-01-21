'use client';
import { NextPage } from "next";
import { useState } from "react";

import socket from "socket.io-client";

interface Message{
  username: string,
  text: string,
  room: string
};
interface ChatParams{
  params: {
    id: string
  };
};

const Chat: NextPage<ChatParams> = ( { params } ) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const io = socket("http://localhost:4000");
  io.emit("join chat", params.id);
  
  io.on("message", message => {
    console.log(message);
    setMessages(prev => [...prev, message]);
  });

  function sendMessage(){
    io.emit("message", { username: "string", text: "string", room: params.id });
  };

  return(
    <>
      <h1>chat { params.id }</h1>
      <button onClick={sendMessage}>CLICK ME</button>
    </>
  );
};

export default Chat;