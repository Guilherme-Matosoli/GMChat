'use client';
import { NextPage } from "next";
import { Container } from "./styles";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Message } from "@/components/Message";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { useState } from "react";

interface ChatIdParams {
  params: {
    chatId: string
  }
};

const Chat: NextPage<ChatIdParams> = ({ params: { chatId } }) => {
  const [ message, setMessage ] = useState<string>();

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
            <Message 
              name="Joao" 
              content="capeta juniors"
            />
            <Message 
              name="guilherme" 
              content="karaio"
            />
            <Message 
              name="guilherme" 
              content="karaio"
            />
            <Message 
              name="Joao" 
              content="MEU IRMAO VÁ TOMAR NO MEIO DO SEU CU VÁ PORRA ME DEIXEDE BOA MEU VELHO TA MALUCO QUE CARA CHATO"
            />
            <Message 
              name="Joao" 
              content="MEU IRMAO VÁ TOMAR NO MEIO DO SEU CU VÁ PORRA ME DEIXEDE BOA MEU VELHO TA MALUCO QUE CARA CHATO"
            />
            <Message 
              name="Joao" 
              content="MEU IRMAO VÁ TOMAR NO MEIO DO SEU CU VÁ PORRA ME DEIXEDE BOA MEU VELHO TA MALUCO QUE CARA CHATO"
            />
          </div>

          <div className="inputArea">
            <TextArea 
              placeholder="Digite sua mensagem"
              onChange={e => setMessage(e.target.value)}
              value={message}
            /> 

            <button className="sendButton">
              <img src="/sendIcon.svg" alt="Enviar" />
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Chat;