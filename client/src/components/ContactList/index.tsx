import { Container } from "./styles"
import { User } from "@/app/dashboard/page"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { api } from "@/services/api"
import { AxiosResponse } from "axios"
import { handleLogout } from "@/utils/handleLogout"
import { socket } from "@/services/io"
import { UserFinder } from "../UserFinder"
import { Chats } from "./chats"
import { AddButton } from "../AddButton"
import { Loading } from "../Loading"

export interface Chat {
  user: User,
  id: string
};

export const ContactList = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const authContext = useContext(AuthContext);

  const [pending, setPending] = useState(false);
  const getChats = async () => {
    try {
      if (!authContext.user) return;
      const response = await api.get(`/chat/list/${authContext.user?.username}`, { headers: { 'authorization': 'Bearer ' + authContext.token } });
      setChats(response.data);
    }
    catch (err) {
      if (typeof err == "object" && err != null && "response" in err) {
        const { data: { message } } = err.response as unknown as AxiosResponse;

        if (message == "Invalid token" || message == "User without authorization" || message == "User not found") handleLogout();
      }
    }
    finally {
      setPending(false);
    }
  };

  const [searchUserName, setSearchUserName] = useState<string | undefined>();
  const [filteredChats, setFilteredChats] = useState<Chat[]>();
  const searchChat = () => {
    if (searchUserName) {
      const filterChats = chats.filter(chat => {
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


  const [searchNewUserMode, setNewSearchMode] = useState(false);
  const [searchNewUsername, setSearchNewUsername] = useState<string>();

  useEffect(() => {
    setPending(true);
    window.addEventListener("beforeunload", () => socket.emit("disconect", authContext?.user?.username));

    if (authContext.user) socket.emit("dashboard", authContext.user?.username);

    socket.on("new message", () => {
      getChats()
    });

    getChats();

    return () => {
      socket.off("new message")
      window.removeEventListener("beforeunload", () => socket.emit("disconect", authContext?.user?.username));
    };
  }, []);

  return (
    <Container>
      <div className={searchNewUserMode ? "topSide search" : "topSide"}>
        <h2>Chats</h2>

        <input
          placeholder={searchNewUserMode ? "Digite o username de quem quer adicionar" : "Busca por nome do usuário"}
          onChange={e => {
            searchNewUserMode ? setSearchNewUsername(e.target.value) : setSearchUserName(e.target.value)
          }}
          type="text"

          value={searchNewUserMode ? searchNewUsername : searchUserName}
          autoCapitalize="none"
        />

        <AddButton
          onClick={() => setNewSearchMode(!searchNewUserMode)}
        />
      </div>

      <div className="contacts">
        {
          pending && <Loading />
        }

        {
          !pending && chats.length < 1 && !searchNewUserMode && (
            <div className="whitoutChats" >
              <span>
                Nenhum chat ainda. Procure por seus amigos e comece a ser divertir já!
              </span>
            </div>
          )
        }

        {
          !pending && searchNewUserMode
            ?
            <UserFinder username={searchNewUsername!} />
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
