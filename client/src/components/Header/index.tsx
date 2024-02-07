import { HTMLAttributes } from "react";
import { HeaderButton } from "../HeaderButton";
import { Container } from "./styles";

interface HeaderProps{
  showButtons?: boolean
};

export const Header: React.FC<HeaderProps>= ( { showButtons } ) => {
  return(
    <Container className={ showButtons ? "" : "hidden" }>
      <a href="/">
        <img
          src="headerLogo.svg" 
          alt="GMChat" 
          draggable={false}
        />
      </a>

      <div className="buttonWrapper">
        <HeaderButton href="/auth/login" buttonType={ 1 }>
          LogIn
        </HeaderButton>

        <HeaderButton href="/auth/signup">
          SignUp
        </HeaderButton>
      </div>
    </Container>
  );   
};