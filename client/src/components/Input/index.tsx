import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title: string
  name: string
};

export const Input: React.FC<InputProps> = ( { title, name, ...rest } ) => {
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
    </Container>
  )
}