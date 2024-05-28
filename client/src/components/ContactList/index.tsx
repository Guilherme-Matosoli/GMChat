import { Container } from "./styles"
import { Contact } from "../Contact"
import { User } from "@/app/dashboard/page"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { api } from "@/services/api"
import { AxiosResponse } from "axios"
import { handleLogout } from "@/utils/handleLogout"
import { socket } from "@/services/io"
import { UserFinder } from "../UserFinder"
import { Chats } from "./chats"

export interface Chat {
  user: User,
  id: string
};

export const ContactList = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const context = useContext(AuthContext);

  const getChats = async () => {
    try {
      if (!context.user) return;
      const response = await api.get(`/chat/list/${context.user?.username}`, { headers: { 'authorization': 'Bearer ' + context.token } });
      setChats(response.data);
    }
    catch (err) {
      if (typeof err == "object" && err != null && "response" in err) {
        const errorResponse = err.response as unknown as AxiosResponse;

        if (errorResponse.data.message == "Invalid token") handleLogout();
      }
    };
  };

  const [searchUserName, setSearchUserName] = useState<string | undefined>();
  const [filteredChats, setFilteredChats] = useState<Chat[]>();
  const searchChat = () => {
    if (searchUserName) {
      const filterChats = chats.filter(chat => {
        console.log(`User name: ${chat.user.name}  user search: ${searchUserName}`)
        return chat.user.name.includes(searchUserName!)
      });

      setFilteredChats(filterChats);
      return;
    }

    setFilteredChats(undefined);
  };

  useEffect(() => {
    searchChat()
  }, [searchUserName]);


  const [newSearchMode, setNewSearchMode] = useState(false);
  const [searchNewUser, setSearchNewUser] = useState<string>();

  useEffect(() => {
    if (context.user) socket.emit("newChat", context.user?.username);

    socket.on("new message", () => {
      setTimeout(() => getChats(), 500);
    });

    getChats();

    return () => { socket.off("new message") };
  }, []);

  return (
    <Container>
      <div className={newSearchMode ? "topSide search" : "topSide"}>
        <h2>Chats</h2>

        <input
          placeholder={newSearchMode ? "Digite o username de quem quer adicionar" : "Busca por nome do usuário"}
          onChange={e => {
            newSearchMode ? setSearchNewUser(e.target.value) : setSearchUserName(e.target.value)
          }}
          type="text"
          value={searchUserName}
        />

        <button className="newChat" onClick={() => setNewSearchMode(!newSearchMode)}>
          <img
            src="addIcon.svg"
            alt="Sinal de mais (adicionar)"
          />
        </button>
      </div>

      <div className="contacts">
        {
          newSearchMode
            ?
            <UserFinder username={searchNewUser!} />
            :

            <Chats
              onClickFunction={() => {
                setFilteredChats(undefined);
                setSearchUserName("");
              }}

              filteredChats={filteredChats}
              chats={chats}
            />
        }
      </div>

    </Container>
  )
}
