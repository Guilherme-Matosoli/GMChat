import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

};

export const AddButton: React.FC<AddButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <img
        src="addIcon.svg"
        alt="Sinal de mais (adicionar)"
      />
    </Container>
  )
}
