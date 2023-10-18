'use client';
import { NextPage } from "next";

interface ChatParams{
  params: {
    id: string
  };
};

const Chat: NextPage<ChatParams> = ( { params } ) => {
  

  return(
    <h1>chat { params.id }</h1>
  );
};

export default Chat;