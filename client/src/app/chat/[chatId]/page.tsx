'use client';
import { NextPage } from "next";
import { Container } from "./styles";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import Link from "next/link";

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
        <div className="chatArea">
          <header className="topSide">
            <Link href="/dashboard">
              <img src="/arrowRight.svg" alt="Retornar" />
              Voltar à página inicial
            </Link>

            <span>
              Chat com: Joao
            </span>
          </header>

          <div className="messageArea">

          </div>

          <div className="inputArea">
            
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Chat;