import { Input } from "@/components/Input";
import { Container } from "./styles";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";


const Login = () => {
  return(
    <Container>
      <h1>FAÇA SEU LOGIN</h1>

      <Input 
        title="Email:"
        name="email"
        placeholder="Digite seu email"
        type="email"
        required
      />

      <Input 
        title="Senha:"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        required
      />

      <div className="buttonsWrapper">
        <RealButton type="submit">
          Entrar
        </RealButton>

        <span className="separator">
          ou
        </span>

        <LinkButton href="/auth/signup" type={2}>
          Cadastre-se
        </LinkButton>
      </div>
    </Container>
  )
};

export default Login;