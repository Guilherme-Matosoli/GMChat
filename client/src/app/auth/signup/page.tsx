'use client';
import { Input } from "@/components/Input";
import { Container, InputWrapper } from "./style";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "@/services/api";

interface SignUpInfos{
  name: string,
  username: string,
  email: string,
  password: string
};

const SignUp = () => {
  const [signUpInfos, setSignUpInfos] = useState<SignUpInfos>({ name: '', username: '', email: '', password: '' });

  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; 

    setSignUpInfos(current => ({
      ...current,
      [name]: value || ''
    }));
  };

  const signup = async (e: FormEvent) => {
    e.preventDefault();
    const response = await api.post('register', signUpInfos);

    console.log(response.data)

    if(response.data.status == "ok"){
      setSignUpInfos({ name: '', username: '', email: '', password: '' });
    };
  };

  return (
    <Container onSubmit={signup}>
      <h1>CADASTRE-SE</h1>

      <InputWrapper>
        <Input
          title="Nome:"
          name="name"
          placeholder="Digite seu nome"
          required
          onChange={setInfos}
          value={signUpInfos.name}
        />
        <Input
          title="Usuário:"
          name="username"
          placeholder="Digite seu usuário"
          required
          onChange={setInfos}
          value={signUpInfos.username}
        />
      </InputWrapper>

      <Input
        title="Email:"
        name="email"
        placeholder="Digite seu email"
        type="email"
        required
        onChange={setInfos}
        value={signUpInfos.email}
      />

      <Input
        title="Senha:"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        required
        onChange={setInfos}
        value={signUpInfos.password}
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
