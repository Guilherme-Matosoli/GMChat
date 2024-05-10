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
        <div className="chatArea">
          <header className="topSide">
            <button>
              <img src="/arrowRight.svg" alt="Retornar" />
              Voltar à página inicial
            </button>

            <span>
              Chat com: Joao
            </span>
          </header>
        </div>
      </Content>
    </Container>
  );
};

export default Chat;