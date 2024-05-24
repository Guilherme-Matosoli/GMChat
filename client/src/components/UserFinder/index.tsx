import { User } from "@/app/dashboard/page";
import { Input } from "../Input";
import { Container } from "./styles";
import { useContext, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import { Contact } from "../Contact";

export const UserFinder = () => {
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


  return (
    <Container>
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
    </Container>
  )
};
