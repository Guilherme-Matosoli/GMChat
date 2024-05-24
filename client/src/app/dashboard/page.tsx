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

import { socket } from "@/services/io";
import { ContactList } from "@/components/ContactList";

export interface User {
  username: string,
  name: string,
  id: number
};



const Dashboard = () => {
  const [userSearchResult, setUserSearchResult] = useState<User[] | null>();
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

  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push('/auth/login');
      return;
    };
    setHasToken(true);

  }, [context]);

  return hasToken && (
    <Container>
      <Content>
        <Header />

        <main>
          <ContactList />

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
