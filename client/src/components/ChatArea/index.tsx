import { useContext } from "react";
import { ChatContext } from "@/context/ChatContext";
import { ChatAreaContent } from "./ChatArea";
import { OffChat } from "../OffChat";

interface ChatIdParams {
  chatId?: string,
  className?: string
};

export const ChatArea: React.FC<ChatIdParams> = ({ chatId, className }) => {
  const chatContext = useContext(ChatContext);

  return (
    <>
      {
        chatContext.actualChat
          ?
          <ChatAreaContent chatId={chatId} className={className} />
          :
          <OffChat />
      }
    </>
  );
};
