import { ButtonHTMLAttributes, useState } from "react";
import { Container, ModalContainer } from "./styles";

interface ConfigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };


const Modal = () => {
  return (
    <ModalContainer>

    </ModalContainer>
  )
};

export const ConfigButton: React.FC<ConfigButtonProps> = ({ ...rest }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container {...rest}>
      <img src="/settingsIcon.svg" onClick={() => setIsModalOpen(!isModalOpen)} />
      {isModalOpen && <Modal />}
    </Container>
  )
};
