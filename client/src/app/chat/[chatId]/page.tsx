'use client';
import { NextPage } from "next";
import { Container } from "./styles";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Message } from "@/components/Message";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/router";

interface ChatIdParams {
  params: {
    chatId: string
  }
};

interface User{
  name: string,
  username: string
};
interface Message{
  id: string,
  user: User,
  content: string,
  time: string
};

const Chat: NextPage<ChatIdParams> = ({ params: { chatId } }) => {
  const [chatUser, setChatUser] = useState<String | null>();

  const [ messageList, setMessageList ] = useState<Message[]>();
  const [ message, setMessage ] = useState<string>();

  const getMessages = async () => {
    try{
      const response = await api.get(`/message/list/${ chatId }`);  
      setMessageList(response.data.messages)
    }
    catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setChatUser(queryParams.get('user'));

    getMessages();
  }, []);

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
              Chat com: { chatUser }
            </span>
          </header>

          <div className="messageArea">
            {
              messageList?.map(msg => {
                return(
                  <Message 
                    key={ msg.id }
                    content={ msg.content }
                    name={ msg.user.name }
                  />
                )
              })
            }
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