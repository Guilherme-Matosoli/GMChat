import { Container } from "./styles"

interface ContentProps{
  children?: React.ReactNode
}

export const Content: React.FC<ContentProps> = ( { children } ) => {
  return(
    <Container>
      { children }
    </Container>
  )
}