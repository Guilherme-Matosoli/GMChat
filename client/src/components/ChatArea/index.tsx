import { useContext } from "react";
import { ChatContext } from "@/context/ChatContext";
import { ChatAreaContent } from "./ChatArea";
import { OffChat } from "../OffChat";

interface ChatIdParams {
  chatId?: string
};

export const ChatArea: React.FC<ChatIdParams> = ({ chatId }) => {
  const chatContext = useContext(ChatContext);

  return (
    <>
      {
        chatContext.actualChat
          ?
          <ChatAreaContent chatId={chatId} />
          :
          <OffChat />
      }
    </>
  );
};
