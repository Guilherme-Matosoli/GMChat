import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ConfigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

};

export const ConfigButton: React.FC<ConfigButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <img src="/settingsIcon.svg" />

    </Container>
  )
};
