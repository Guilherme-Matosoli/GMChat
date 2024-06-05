import { InputHTMLAttributes, Ref } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string,
  name: string,
  errorDesc?: string,
};

export const Input: React.FC<InputProps> = ({ title, name, errorDesc, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>
        {title}
      </label>

      <input
        type="text"
        name={name}
        {...rest}
      />

      {
        errorDesc && (
          <span className="errorDesc">
            {errorDesc}
          </span>
        )
      }
    </Container>
  )
}
