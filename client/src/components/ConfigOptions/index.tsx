import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ConfigOptionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
};

export const ConfigOptions: React.FC<ConfigOptionsProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>

    </Container>
  )
}
