import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
};


export const RealButton: React.FC<ButtonProps> = ( { children, ...rest } ) => {
  return(
    <ButtonContainer { ...rest }>
      { children }
    </ButtonContainer>
  );
};