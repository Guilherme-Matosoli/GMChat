'use client';
import { Input } from "@/components/Input";
import { Container } from "./styles";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "@/services/api";

interface LoginInfos{
  email?: string,
  password?: string
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfos>();

  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginInfo((currentInfo) => ({
      ...currentInfo,
      [name]: value || ''
    }));
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const request = await api.post('login', loginInfo);

    console.log(request.data);
  };

  return(
    <Container onSubmit={e => login(e)}>
      <h1>FAÇA SEU LOGIN</h1>

      <Input 
        title="Email:"
        name="email"
        placeholder="Digite seu email"
        type="email"
        required
        onChange={e => setInfos(e)}
        value={loginInfo?.email}
      />

      <Input 
        title="Senha:"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        required
        onChange={e => setInfos(e)}
        value={loginInfo?.password}
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