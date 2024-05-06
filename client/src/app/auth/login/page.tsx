'use client';
import { Input } from "@/components/Input";
import { Container } from "./styles";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "@/services/api";
import { AxiosError, AxiosResponse } from "axios";

interface LoginInfos{
  email?: string,
  password?: string
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfos>({ email: '', password: '' });
  const [error, setError] = useState<string | undefined>();

  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginInfo((currentInfo) => ({
      ...currentInfo,
      [name]: value || ''
    }));
  };

  const login = async (e: FormEvent) => {
    try{
      e.preventDefault();
      const request = await api.post('login', loginInfo);
    }
    catch(err: unknown){
      if(typeof err == "object" && err != null && "response" in err){
        const errorResponse = err.response as AxiosResponse;

        errorResponse.data.message == "Invalid email or password" && setError("Email ou senha inválidos, tente novamente.");
        setLoginInfo(current => ({ ...current, password: '' }));
        
        return
      };
      setError("Erro interno do servidor, tente novamente mais tarde.");
    };
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
        errorDesc={ error }
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