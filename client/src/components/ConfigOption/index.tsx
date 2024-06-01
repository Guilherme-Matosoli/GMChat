import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ConfigOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
};

export const ConfigOption: React.FC<ConfigOptionProps> = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}
