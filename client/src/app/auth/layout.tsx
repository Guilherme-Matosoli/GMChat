import { Container } from "./styles";

interface AuthLayoutProps {
  children?: React.ReactNode
};

const AuthLayout: React.FC<AuthLayoutProps> = ( { children } ) => {
  return(
    <Container>
      <img src="/gm-auth-responsive.svg" alt="GMChat" className="logo"/>
      <main className="content">
        <div className="formArea">
          <div className="form">
            { children }
          </div>
        </div>
        <div className="aside">
          <a href="/">
            <img 
              src="/gm-auth.svg" 
              alt="GMChat" 
              draggable={false}
            />
          </a>
        </div>
      </main>
    </Container>
  );
};

export default AuthLayout;