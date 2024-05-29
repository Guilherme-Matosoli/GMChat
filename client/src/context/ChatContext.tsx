'use client';
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Chat } from "@/components/ContactList";

interface ChatInfos {
  actualChat: Chat | undefined,
  setActualChat: Dispatch<SetStateAction<Chat | undefined>>
};

export const ChatContext = createContext({} as ChatInfos);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [actualChat, setActualChat] = useState<Chat>();

  return (
    <ChatContext.Provider value={{ actualChat, setActualChat }}>
      {children}
    </ChatContext.Provider>
  )
}
