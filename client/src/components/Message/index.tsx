import { Container } from './styles';

interface MessageProps{
  name: string,
  content: string
};

export const Message: React.FC<MessageProps> = ({ name, content }) => {
  return(
    <Container>
      <span className='userName'>
        { name }
      </span>

      <p className='messageContent'>
        { content }
      </p>
    </Container>
  )
}