import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title: string
  name: string
  error?: string
};

export const Input: React.FC<InputProps> = ( { title, name, error, ...rest } ) => {
  return (
    <Container>
      <label htmlFor={ name }>
        { title } 
      </label>

      <input 
        type="text" 
        name={ name }
        { ...rest }
      />

      <span className="error">
        { error }
      </span>
    </Container>
  )
}