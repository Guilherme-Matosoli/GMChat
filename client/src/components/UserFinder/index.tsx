import { User } from "@/app/dashboard/page";
import { Input } from "../Input";
import { Container } from "./styles";
import { Contact } from "../Contact";

import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

interface UserFinderProps {
  username: string
};

export const UserFinder: React.FC<UserFinderProps> = ({ username }) => {
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


  useEffect(() => {
    handleFindUsers(username)
    console.log("pikas")
  }, [username]);


  return (
    <Container>
      {
        userSearchResult?.map(user => {
          return <Contact toAdd name={user.name} username={user.username} contactId={user.id} />
        })
      }
    </Container>
  )
};
