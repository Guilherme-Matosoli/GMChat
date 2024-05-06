'use client';
import { Content } from "@/components/Content";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Input } from "@/components/Input";

import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

interface User{
  username: string,
  name: string,
  id: number
};


const Dashboard = () => {
  const [userSearchResult, setUserSearchResult] = useState<User[] | null>();

  const handleFindUsers = async (username: string) => {
    try{    
      const request = await api.get(`/users/${username}`);
      setUserSearchResult(request.data);
    }
    catch(err){
      setUserSearchResult(null);
    }
  };

  const authContext = useContext(AuthContext);

  const getChats = async () => {  
    await api.get('chat/list/')
  };
  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <Content>
        <Header />

        <main>
          <section className="contactsList">
            <div className="topSide">
              <h2>Lista de contatos</h2>
            </div>

            <div className="contacts">
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
              <Contact />
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
                    return <Contact toAdd name={user.name} username={user.username} id={user.id}/>
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
