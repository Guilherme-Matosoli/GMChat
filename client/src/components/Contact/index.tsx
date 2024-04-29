import { Container } from "./styles";

interface ContactProps{
  toAdd?: boolean
};

export const Contact: React.FC<ContactProps> = ({ toAdd }) => {
  const randomIcon = () => {
    const randomNumber = Math.floor(Math.random() * 9);

    return "icons/" + randomNumber + ".svg"
  };

  return(
    <Container className={ toAdd ? "add" : "" }>
      <img src={randomIcon()} alt="a" />

      <span>Fulano</span>

      <button>
        +
      </button>
    </Container>
  );
};