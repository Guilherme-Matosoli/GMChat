import { HeaderButton } from "../HeaderButton";
import { Container } from "./styles";

export const Header = () => {
  return(
    <Container>
      <a href="/">
        <img
          src="headerLogo.svg" 
          alt="GMChat" 
          draggable={false}
        />
      </a>

      <div className="buttonWrapper">
        <HeaderButton href="/login" buttonType={1}>
          LogIn
        </HeaderButton>

        <HeaderButton href="/signup">
          SignUp
        </HeaderButton>
      </div>
    </Container>
  );   
};