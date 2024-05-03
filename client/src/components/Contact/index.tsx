import { api } from "@/services/api";
import { Container } from "./styles";

interface ContactProps{
  toAdd?: boolean,
  name?: string,
  username?: string,
  id?: number
};

export const Contact: React.FC<ContactProps> = ({ toAdd, name, username, id }) => {
  const randomIcon = () => {
    const firstNumberAtId = String(id)?.split('')[0]

    return "icons/" + firstNumberAtId + ".svg"
  };

  const createChat = async () => {
    try{
      const data = { userSender: "sssa", userReceiver: username };
      
      const response = await api.post("/chat/create", data);
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
  };

  return(
    <Container className={ toAdd ? "add" : "" }>
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