import { Chat } from "@/app/dashboard/page"
import { Container } from "./styles"
import { Contact } from "../Contact"

interface ContatctListProps {
  chats: Chat[]
};

export const ContactList: React.FC<ContatctListProps> = ({ chats }) => {
  return (
    <Container>
      <div className="topSide">
        <h2>Lista de contatos</h2>
      </div>

      <div className="contacts">
        {
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
      </div>

    </Container>
  )
}
