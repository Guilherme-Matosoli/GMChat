'use client';
import { Container } from "./styles";

import { HTMLAttributes, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/utils/alert";
import { AxiosResponse } from "axios";
import Link from "next/link";
import { handleMonth } from "@/utils/handleMonth";

interface User {
  username: string,
  name: string,
};

interface Chat {
  user: User,
  id: string
};

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  toAdd?: boolean,
  name?: string,
  username?: string,
  contactId?: number,
  chatId?: string,
  chatList?: Chat[]
};

export const Contact: React.FC<ContactProps> = ({ toAdd, name, username, contactId, chatId, chatList, ...rest }) => {
  const context = useContext(AuthContext);
  const [lastMessage, setLastMessage] = useState("");

  const [time, setTime] = useState("");
  const handleDate = () => {
    const messageDate = new Date(time);

    const month = handleMonth(messageDate.getMonth());
    const day = messageDate.getDate();

    return `${day} ${month}`
  };

  const handleTime = () => {
    const messageDate = new Date(time);

    const hour = messageDate.getHours();
    const minute = messageDate.getMinutes();

    const handleMinutes = () => {
      if (String(minute).length != 2) return 0 + String(minute);
      else return minute
    };

    return `${hour}:${handleMinutes()}`
  };

  const randomIcon = () => {
    const firstNumberAtId = String(contactId)?.split('')[0]

    return "/icons/" + firstNumberAtId + ".svg"
  };

  const createChat = async () => {
    try {
      const data = { userSender: context.user?.username, userReceiver: username };

      const response = await api.post("/chat/create", data, { headers: { 'authorization': 'Bearer ' + context.token } });
      if (response.data.id) showToast("Chat criado com sucesso!");
      window.location.reload();
    }
    catch (err: unknown) {
      if (typeof err == "object" && err != null && 'response' in err) {
        const errorResponse = err.response as AxiosResponse;

        errorResponse.data.message == "Chat already exists" && showToast("Chat já existente!");
        return;
      };

      showToast("Tente novamente mais tarde.");
    }
  };

  const getLastMessage = async () => {
    try {
      const response = await api.get(`/message/getlast/${chatId}`, { headers: { 'authorization': 'Bearer ' + context.token } });

      const message = response.data[0];
      setTime(message.time);

      const lastMessageReturn = `${context.user?.username == message.user ? "Você: " : name + ": "} ${message.content}`;
      setLastMessage(lastMessageReturn)
    }
    catch (err) {
      console.log(err)
    };
  };

  let teste = '';

  useEffect(() => {
    if (context.token) getLastMessage()

    teste = 'capete'

  }, [context, chatList]);

  return (
    <Container className={toAdd ? "add" : ""} {...rest}>
      <Toaster />
      <img className="avatar" src={contactId ? randomIcon() : "icons/2.svg"} alt="Foto de uma pessoa" />

      <div className="info">
        <span className="userName">{name}</span>
        <strong>{lastMessage || username}</strong>
      </div>

      {
        toAdd ? (
          <button className="addButton" onClick={() => createChat()}>
            +
          </button>
        ) : (
          <div className="messageTime">
            <span className="date"> {handleDate()} </span>
            <span className="hour"> {handleTime()} </span>
          </div>
        )
      }

    </Container>
  );
};
