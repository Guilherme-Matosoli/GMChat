import { ButtonHTMLAttributes, useContext, useState } from "react";
import { Container, ModalContainer } from "./styles";
import { ConfigOption } from "../ConfigOption";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

interface ConfigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chatId: string
};


const Modal = ({ chatId }: { chatId: string }) => {
  const authContext = useContext(AuthContext);

  const deleteAllMessages = async () => {
    try {
      const response = await api.delete(`/message/delete/${chatId}`, { headers: { "authorization": "Bearer " + authContext.token } })
      if (response.data.message == "Delete successfully") window.location.reload();
    }
    catch (err) { }
  };

  const deleteChat = async () => {
    try {
      const response = await api.delete(`/chat/delete/${chatId}`, { headers: { "authorization": "Bearer " + authContext.token } })
      if (response.data.message == "Delete successfully") window.location.reload();
    }
    catch (err) { }
  };

  return (
    <ModalContainer>
      <ConfigOption text="Apagar mensagens" onClick={deleteAllMessages} />
      <ConfigOption text="Apagar contato" onClick={deleteChat} />
    </ModalContainer>
  )
};

export const ConfigButton: React.FC<ConfigButtonProps> = ({ chatId, ...rest }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container {...rest}>
      <img src="/settingsIcon.svg" onClick={() => setIsModalOpen(!isModalOpen)} />
      {isModalOpen && <Modal chatId={chatId} />}
    </Container>
  )
};
