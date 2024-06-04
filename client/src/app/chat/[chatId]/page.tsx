'use client';
import { NextPage } from "next";
import { ChatArea } from "@/components/ChatArea";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "@/context/ChatContext";
import { useRouter } from "next/navigation";
import { Container } from "./styles";

interface ChatIdParams {
  params: {
    chatId: string
  }
};

const Chat: NextPage<ChatIdParams> = ({ params: { chatId } }) => {
  const chatContext = useContext(ChatContext);
  const [hasChat, setHasChat] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!chatContext.actualChat) {
      router.push("/dashboard");
      return;
    };

    setHasChat(true);
  }, [chatContext]);

  return hasChat && (
    <Container>
      <ChatArea chatId={chatId} className="fullscreen" />
    </Container>
  );
};

export default Chat;
