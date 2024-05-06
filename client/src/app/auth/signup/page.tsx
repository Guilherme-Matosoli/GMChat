'use client';
import { Input } from "@/components/Input";
import { Container, InputWrapper } from "./style";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import toast, { Toaster } from "react-hot-toast";

interface SignUpInfos{
  name: string,
  username: string,
  email: string,
  password: string
};

interface Errors{
  emailError?: string,
  userError?: string,
  others?: string
}

const SignUp = () => {
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

  const alert = () => {
    toast("Cadastro concluído! ✅", {
      className: 'toast'
    })
  };

  const [signUpInfos, setSignUpInfos] = useState<SignUpInfos>({ name: '', username: '', email: '', password: '' });
  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; 

    setErrors({ emailError: undefined, userError: undefined, others: undefined });

    setSignUpInfos(current => ({
      ...current,
      [name]: value || ''
    }));
  };

  const [errors, setErrors] = useState<Errors>({ emailError: undefined, userError: undefined, others: undefined });
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try{
      const response = await api.post('register', signUpInfos);

      setSignUpInfos({ name: '', username: '', email: '', password: '' });
      alert();

      router.push('login')
    }
    catch(err: unknown){
      if(typeof err == 'object' && err != null && 'response' in err){
        const errorResponse = err.response as AxiosResponse;

        errorResponse.data.message == 'Email already exists' && setErrors(current => ({ ...current, emailError: "Email já cadastrado." }));
        errorResponse.data.message == 'Username already exists' && setErrors(current => ({ ...current, userError: "Usuário já cadastrado." }));
        
        return;
      }

      setErrors(current => ({ ...current, others: "Erro interno do servidor, tente novamente mais tarde." }))
    }
  };

  return hasToken && (
    <Container onSubmit={handleSignup}>
      <Toaster />
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
          errorDesc={errors.userError}
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
        errorDesc={errors.emailError}
      />

      <Input
        title="Senha:"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        required
        onChange={setInfos}
        value={signUpInfos.password}
        errorDesc={errors.others}
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
