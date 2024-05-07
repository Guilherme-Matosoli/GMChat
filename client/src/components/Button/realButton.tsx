import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";
import { LoadingIcon } from "../LoadingIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  pending?: boolean
};


export const RealButton: React.FC<ButtonProps> = ( { children, pending, ...rest } ) => {
  return(
    <ButtonContainer { ...rest } className={pending ? "pending" : ""}>
      { 
        pending ? <LoadingIcon/> : children 
      }
    </ButtonContainer>
  );
};