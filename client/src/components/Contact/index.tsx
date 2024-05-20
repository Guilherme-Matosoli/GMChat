import { Container } from "./styles";

import { HTMLAttributes, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/utils/alert";
import { AxiosResponse } from "axios";
import Link from "next/link";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  toAdd?: boolean,
  name?: string,
  username?: string,
  contactId?: number,
  chatId?: string
};

export const Contact: React.FC<ContactProps> = ({ toAdd, name, username, contactId, chatId, ...rest }) => {
  const context = useContext(AuthContext);

  const randomIcon = () => {
    const firstNumberAtId = String(contactId)?.split('')[0]

    return "icons/" + firstNumberAtId + ".svg"
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

  return (
    <Container className={toAdd ? "add" : ""} {...rest}>
      <Toaster />
      <img className="avatar" src={contactId ? randomIcon() : "icons/2.svg"} alt="Foto de uma pessoa" />

      <div className="info">
        <span>{name || "fulano"}</span>
        <strong>{username || "bak"}</strong>
      </div>

      {
        toAdd ? (
          <button className="addButton" onClick={() => createChat()}>
            +
          </button>
        ) : (
          <Link className="goToChat" href={`chat/${chatId}?name=${name}&username=${username}`}>
            <img src="/arrowRight.svg" alt="" />
          </Link>
        )
      }

    </Container>
  );
};
