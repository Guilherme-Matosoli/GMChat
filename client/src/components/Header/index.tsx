import { Button } from "../Button";
import { Container } from "./styles";

export const Header = () => {
  return(
    <Container>
      <h1>GMChat</h1>

      <div className="buttons-wrapper">
        <Button>LogIn</Button>
        <Button>SignUp</Button>
      </div>
    </Container>
  );
};