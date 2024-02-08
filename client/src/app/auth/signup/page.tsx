import { Input } from "@/components/Input";
import { Container, InputWrapper } from "./style";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";


const SignUp = () => {
  return(
    <Container>
      <h1>CADASTRE-SE</h1>

      <InputWrapper>
        <Input 
          title="Nome"
          name="name"
          placeholder="Digite seu nome"
        />
        <Input 
          title="Sobrenome"
          name="lastName"
          placeholder="Digite seu sobrenome"
        />
      </InputWrapper>

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
  );
};

export default SignUp;