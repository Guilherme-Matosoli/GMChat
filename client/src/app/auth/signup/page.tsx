import { Input } from "@/components/Input";
import { Container } from "./style";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";


const SignUp = () => {
  

  return (
    <Container>
      <h1>CADASTRE-SE</h1>

      <Input
        title="Nome"
        name="name"
        placeholder="Digite seu nome"
      />
        
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
          Cadatrar-se
        </RealButton>

        <span className="separator">
          ou
        </span>

        <LinkButton href="/auth/login" type={2}>
          Entrar
        </LinkButton>
      </div>
    </Container>
  );
};

export default SignUp;
