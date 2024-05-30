import { useContext } from "react";
import { Chat } from ".";
import { Contact } from "../Contact";
import { ChatContext } from "@/context/ChatContext";

interface ChatsProps {
  filteredChats?: Chat[],
  chats?: Chat[],
  onClickFunction: () => void
};

export const Chats: React.FC<ChatsProps> = ({ filteredChats, chats, onClickFunction }) => {
  const chatContext = useContext(ChatContext);

  return (
    <>
      {
        filteredChats
          ?
          filteredChats?.map(chat => {
            return (
              <Contact
                key={chat.id}
                name={chat.user.name}
                username={chat.user.username}
                contactId={chat.user.id}
                chatId={chat.id}
                chatList={chats}
                onClickFunc={() => {
                  onClickFunction();
                  chatContext.setActualChat(chat);
                }}
              />
            )
          })
          :
          chats?.map(chat => {
            return (
              <Contact
                key={chat.id}
                name={chat.user.name}
                username={chat.user.username}
                contactId={chat.user.id}
                chatId={chat.id}
                chatList={chats}
                onClickFunc={() => chatContext.setActualChat(chat)}
              />
            )
          })
      }

    </>
  );
}
