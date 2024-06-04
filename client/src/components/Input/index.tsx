import { InputHTMLAttributes, Ref } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string,
  name: string,
  errorDesc?: string,
  inputRef?: React.Ref<HTMLInputElement>
};

export const Input: React.FC<InputProps> = ({ title, name, errorDesc, inputRef, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>
        {title}
      </label>

      <input
        type="text"
        name={name}
        ref={inputRef}
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
