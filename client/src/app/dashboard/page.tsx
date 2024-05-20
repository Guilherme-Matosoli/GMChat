'use client';
import { Content } from "@/components/Content";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Input } from "@/components/Input";

import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { handleLogout } from "@/utils/handleLogout";

interface User {
  username: string,
  name: string,
  id: number
};

interface Chat {
  user: User,
  id: string
};

const Dashboard = () => {
  const [userSearchResult, setUserSearchResult] = useState<User[] | null>();
  const [chats, setChats] = useState<Chat[]>();
  const context = useContext(AuthContext);

  const handleFindUsers = async (username: string) => {
    try {
      const request = await api.get(`/users/${username}`, { headers: { 'authorization': 'Bearer ' + context.token } });
      setUserSearchResult(request.data);
    }
    catch (err) {
      setUserSearchResult(null);
    }
  };

  const getChats = async () => {
    try {
      if (!context.user) return;
      const response = await api.get(`/chat/list/${context.user?.username}`, { headers: { 'authorization': 'Bearer ' + context.token } });
      setChats(response.data);
      console.log(response.data)
    }
    catch (err) {
      if (typeof err == "object" && err != null && "response" in err) {
        const errorResponse = err.response as unknown as AxiosResponse;

        if (errorResponse.data.message == "Invalid token") handleLogout();
      }
    };

  };

  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push('/auth/login');
      return;
    };
    setHasToken(true);

    getChats();
  }, [context]);

  return hasToken && (
    <Container>
      <Content>
        <Header />

        <main>
          <section className="contactsList">
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
                    />
                  )
                })
              }
            </div>
          </section>

          <section className="newChat">
            <div className="topSide">
              <h2>Procurar usuário</h2>
            </div>

            <div className="searchArea">
              <Input
                title=""
                name=""
                placeholder="Digite o usúario"
                onChange={e => handleFindUsers(e.target.value)}
              />
              <div className="result">
                {
                  userSearchResult?.map(user => {
                    return <Contact toAdd name={user.name} username={user.username} contactId={user.id} />
                  })
                }
              </div>

            </div>
          </section>
        </main>
      </Content>
    </Container>
  )
};

export default Dashboard;
