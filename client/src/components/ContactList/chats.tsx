import { Chat } from ".";
import { Contact } from "../Contact";

interface ChatsProps {
  filteredChats?: Chat[],
  chats?: Chat[],
  onClickFunction: () => void
};

export const Chats: React.FC<ChatsProps> = ({ filteredChats, chats, onClickFunction }) => {
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
                onClick={() => onClickFunction()}
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
              />
            )
          })
      }

    </>
  );
}
