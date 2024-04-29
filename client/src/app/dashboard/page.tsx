'use client';
import { Content } from "@/components/Content";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Input } from "@/components/Input";
import axios from "axios";
import { useState } from "react";

interface User{
  username: string,
  name: string
};


const Dashboard = () => {
  const [userSearchResult, setUserSearchResult] = useState<User[] | null>();

  const handleFindUsers = async (username: string) => {
    try{    
      const request = await axios.get(`http://localhost:4000/users/${username}`);
  
      setUserSearchResult(request.data);

      console.log(request.data)
    }
    catch(err){
      setUserSearchResult(null);
    }
  };

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
              {
                userSearchResult?.map(users => {
                  return <Contact />
                })
              }

            </div>
          </section>
        </main>
      </Content>
    </Container>
  )
};

export default Dashboard;
