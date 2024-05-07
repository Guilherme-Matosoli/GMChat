import { HTMLAttributes, useContext } from "react";
import { HeaderButton } from "../HeaderButton";
import { Container } from "./styles";
import { AuthContext } from "@/context/AuthContext";

export const Header = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if(!token) return;

    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    window.location.reload();
  };

  return(
    <Container>
      <a href="/">
        <img
          src="headerLogo.svg" 
          alt="GMChat" 
          draggable={false}
        />
      </a>
      {
        user ? (
          <div className="informations">
            <span className="name">Olá, { user.name }!</span>
            <abbr title="Sair">
              <button className="logout" onClick={handleLogout}>
                <img src="logoutIcon.svg" alt="Sair" />
              </button>
            </abbr>
          </div>
        ) : (
          <div className="buttonWrapper">
            <HeaderButton href="/auth/login" buttonType={ 1 }>
              LogIn
            </HeaderButton>

            <HeaderButton href="/auth/signup">
              SignUp
            </HeaderButton>
          </div>
        )
      }
      
    </Container>
  );   
};