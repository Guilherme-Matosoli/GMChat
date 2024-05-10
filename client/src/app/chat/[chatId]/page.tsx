'use client';
import { NextPage } from "next";
import { Container } from "./styles";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";

interface ChatIdParams {
  params: {
    chatId: string
  }
};

const Chat: NextPage<ChatIdParams> = ({ params: { chatId } }) => {
  

  return (
    <Container>
      <Content>
        <Header />
        {chatId}
      </Content>
    </Container>
  );
};

export default Chat;