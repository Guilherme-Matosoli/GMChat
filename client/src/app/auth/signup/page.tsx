'use client';
import { Input } from "@/components/Input";
import { Container, InputWrapper } from "./style";
import { RealButton } from "@/components/Button/realButton";
import { LinkButton } from "@/components/Button/linkButton";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/utils/alert";

interface SignUpInfos {
  name: string,
  username: string,
  email: string,
  password: string
};

interface Errors {
  emailError?: string,
  userError?: string,
  others?: string
}

const SignUp = () => {
  const [signUpInfos, setSignUpInfos] = useState<SignUpInfos>({ name: '', username: '', email: '', password: '' });
  const setInfos = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors({ emailError: undefined, userError: undefined, others: undefined });

    setSignUpInfos(current => ({
      ...current,
      [name]: value || ''
    }));
  };

  const router = useRouter();

  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Errors>({ emailError: undefined, userError: undefined, others: undefined });
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await api.post('register', signUpInfos);

      setSignUpInfos({ name: '', username: '', email: '', password: '' });
      showToast("Cadastro concluído! ✅");

      response.data.status == "ok" && router.push('login');
    }
    catch (err: unknown) {
      if (typeof err == 'object' && err != null && 'response' in err) {
        const errorResponse = err.response as AxiosResponse;

        errorResponse.data.message == 'Email already exists' && setErrors(current => ({ ...current, emailError: "Email já cadastrado." }));
        errorResponse.data.message == 'Username already exists' && setErrors(current => ({ ...current, userError: "Usuário já cadastrado." }));

        return;
      }

      setErrors(current => ({ ...current, others: "Erro interno do servidor, tente novamente mais tarde." }))
    }
    finally { setPending(false) }
  };

  return (
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
          autoCapitalize="none"
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
        <RealButton type="submit" pending={pending}>
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
