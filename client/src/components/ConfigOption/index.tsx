import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ConfigOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
};

export const ConfigOption: React.FC<ConfigOptionProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>

    </Container>
  )
}
