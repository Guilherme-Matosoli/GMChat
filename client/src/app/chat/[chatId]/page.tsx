'use client';
import { Container } from "./styles";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import { Message } from "@/components/Message";
import { TextArea } from "@/components/TextArea";

import { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { socket } from "@/services/io";
import { AuthContext } from "@/context/AuthContext";

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
  const { user } = useContext(AuthContext);

  const getMessages = async () => {
    try{
      const response = await api.get(`/message/list/${ chatId }`);  
      setMessageList(response.data.messages)
    }
    catch(err){
      console.log(err)
    }
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    socket.emit("message", { room: chatId, user: user, message });
    setMessage('');
  };

  useEffect(() => {
    socket.emit("join chat", chatId);
    socket.on("message", (msg: Message) => {
      setMessageList(prev => [...(prev || []), msg])
    });

    const queryParams = new URLSearchParams(window.location.search);
    setChatUser(queryParams.get('user'));

    getMessages();

    return () => {
      socket.off("message")
    };
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
                    time={ msg.time }
                  />
                )
              })
            }
          </div>

          <form className="inputArea" onSubmit={(e) => sendMessage(e)}>
            <TextArea 
              placeholder="Digite sua mensagem"
              onChange={e => setMessage(e.target.value)}
              value={message}
            /> 

            <button className="sendButton" type="submit">
              <img src="/sendIcon.svg" alt="Enviar" />
            </button>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default Chat;