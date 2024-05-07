import { Container } from "./styles";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/utils/alert";

interface ContactProps{
  toAdd?: boolean,
  name?: string,
  username?: string,
  id?: number
};

export const Contact: React.FC<ContactProps> = ({ toAdd, name, username, id }) => {
  const { user } = useContext(AuthContext);

  const randomIcon = () => {
    const firstNumberAtId = String(id)?.split('')[0]

    return "icons/" + firstNumberAtId + ".svg"
  };

  const createChat = async () => {
    try{
      const data = { userSender: user?.username, userReceiver: username };
      
      const response = await api.post("/chat/create", data);
      if(response.data.id) showToast("Chat criado com sucesso!");
    }
    catch(err){
      console.log(err)
    }
  };

  return(
    <Container className={ toAdd ? "add" : "" }>
      <Toaster/>
      <img src={ id ? randomIcon() : "icons/2.svg" } alt="Foto de uma pessoa" />
      
      <div className="info">
        <span>{ name || "fulano" }</span>
        <strong>{ username || "bak" }</strong>
      </div>

      <button onClick={ () => createChat() }>
        +
      </button>
    </Container>
  );
};