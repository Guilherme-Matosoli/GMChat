'use client';
import { Input } from "@/components/Input";
import { Container } from "./styles";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";

import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/alert";

interface LoginInfos{
  email?: string,
  password?: string
};

const Login = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token != undefined){
      router.push("/dashboard");
      return
    }

    setHasToken(true)
  }, []);

  const [loginInfo, setLoginInfo] = useState<LoginInfos>({ email: '', password: '' });
  const [error, setError] = useState<string | undefined>();
  const authContext = useContext(AuthContext);

  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError(undefined);

    setLoginInfo((currentInfo) => ({
      ...currentInfo,
      [name]: value || ''
    }));
  };

  const [pending, setPending] = useState(false);
  const handleLogin = async (e: FormEvent) => {
    setPending(true);
    try{
      e.preventDefault();
      const request = await api.post('login', loginInfo);

      authContext.setToken(request.data.token);
      authContext.setUser(request.data.user);
      
      showToast("Sucesso! ✅");
      setLoginInfo({ email: '', password: '' });
      window.location.reload();
    }
    catch(err: unknown){
      if(typeof err == "object" && err != null && "response" in err){
        const errorResponse = err.response as AxiosResponse;

        errorResponse.data.message == "Invalid email or password" && setError("Email ou senha inválidos, tente novamente.");
        setLoginInfo(current => ( { ...current, password: '' } ) );
        
        return
      };
      setError("Erro interno do servidor, tente novamente mais tarde.");
    }
    finally{ setPending(false) }
  };

  return hasToken && (
    <Container onSubmit={e => handleLogin(e)}>
      <Toaster/>
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
        <RealButton type="submit" pending={pending}>
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