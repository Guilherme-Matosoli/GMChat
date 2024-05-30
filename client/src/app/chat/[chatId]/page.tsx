'use client';
import { NextPage } from "next";
import { ChatArea } from "@/components/ChatArea";

interface ChatIdParams {
  params: {
    chatId: string
  }
};

const Chat: NextPage<ChatIdParams> = ({ params: { chatId } }) => {
  return <ChatArea chatId={chatId} />;
};

export default Chat;
