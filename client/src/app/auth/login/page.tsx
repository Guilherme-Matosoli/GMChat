import { Input } from "@/components/Input";
import { Container } from "./styles";


const Login = () => {
  return(
    <Container>
      <h1>FAÇA SEU LOGIN</h1>
      <Input 
        title="Email:"
        name="email"
        placeholder="Digite seu email"
      />
      <Input 
        title="Email:"
        name="email"
        placeholder="Digite seu email"
      />
    </Container>
  )
};

export default Login;