import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { ChatContext } from "@/context/ChatContext";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { AxiosResponse } from "axios";
import { handleLogout } from "@/utils/handleLogout";
import { socket } from "@/services/io";
import { Loading } from "../Loading";
import { Message } from "../Message";
import { TextArea } from "../TextArea";
import Link from "next/link";
import { ConfigButton } from "../ConfigButton";
import { Input } from "../Input";

interface ChatIdParams {
  chatId?: string,
  className?: string
};

interface User {
  name: string,
  username: string
};
export interface Message {
  id: string,
  user: User,
  content: string,
  time: string
};


export const ChatAreaContent: React.FC<ChatIdParams> = ({ chatId, className }) => {
  const [messageList, setMessageList] = useState<Message[]>();
  const [message, setMessage] = useState<string>();
  const [userOnline, setUserOnline] = useState(false);

  const chatContext = useContext(ChatContext);
  const context = useContext(AuthContext);
  const messageArea = useRef<HTMLDivElement | null>(null);

  const [fetching, setFetching] = useState(false);
  const getMessages = async () => {
    setFetching(true);
    try {
      const response = await api.get(`/message/list/${chatId}`, { headers: { 'authorization': 'Bearer ' + context.token } });
      setMessageList(response.data.messages)
    }
    catch (err) {
      console.log(err)

      if (typeof err == "object" && err != null && "response" in err) {
        const errorResponse = err.response as unknown as AxiosResponse;

        if (errorResponse.data.message == "Invalid token") handleLogout();

      };
    }
    finally {
      setFetching(false)
    }
  };

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    socket.emit("message", { room: chatId, user: context.user, message, to: chatContext.actualChat?.user.username });
    setMessage('');
    textAreaRef?.current?.focus();
  };

  useEffect(() => {
    if (context.token) getMessages();
    if (chatContext.actualChat) {
      socket.emit("get user online", chatContext.actualChat.user.username);
      socket.on("get user online", response => setUserOnline(response));
    };

    socket.emit("join chat", chatId);
    socket.on("message", (msg: Message) => {
      setMessageList(prev => [...(prev || []), msg])
    });

    setMessage("");

    return () => {
      socket.off("message");
    };
  }, [context, chatContext]);

  useEffect(() => {
    if (messageArea.current) messageArea.current.scrollTop = messageArea.current.scrollHeight;

  }, [messageList]);

  const randomIcon = () => {
    const firstNumberAtId = String(chatContext.actualChat?.user.id)?.split('')[0]

    return "/icons/" + firstNumberAtId + ".svg"
  };

  return (
    <Container className={className}>
      <header className="topSide">
        <div className="info">
          <Link className="backDashboard" href="/dashboard">
            <img src="/arrowRight.svg" />
          </Link>

          <div className={userOnline ? "profilePic online" : "profilePic offline"}>
            <img
              src={randomIcon()}
              draggable="false"
              alt="Foto de perfil do usuário"
            />
          </div>

          <div className="user">
            <span className="name">
              {chatContext.actualChat?.user.name}
            </span>

            <span className="status">
              {userOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        <div className="options">
          <ConfigButton chatId={chatId!} />
        </div>
      </header>

      <div className="messageArea" >
        {
          fetching
            ?
            <Loading />
            :

            <div className="messageList" ref={messageArea}>
              {
                messageList?.map(msg => {
                  return (
                    <Message
                      key={msg.id}
                      content={msg.content}
                      name={msg.user.name}
                      time={msg.time}
                    />
                  )
                })
              }
            </div>
        }
        <form className="inputArea" onSubmit={(e) => sendMessage(e)}>
          <TextArea
            ref={textAreaRef}
            title=""
            name=""
            placeholder="Digite sua mensagem"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />

          <button className="sendButton" type="submit">
            <img src="/sendIcon.svg" alt="Enviar" />
          </button>
        </form>

      </div>
    </Container>

  )
};
