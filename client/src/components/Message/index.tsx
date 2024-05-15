import { useContext } from 'react';
import { Container } from './styles';
import { AuthContext } from '@/context/AuthContext';

interface MessageProps{
  name: string,
  content: string
};

export const Message: React.FC<MessageProps> = ({ name, content }) => {
  const { user } = useContext(AuthContext);

  return(
    <Container className={ user?.name == name ? 'mine' : '' }>
      <span className='userName'>
        { name == user?.name ? "Você" : name }
      </span>

      <p className='messageContent'>
        { content }
      </p>
    </Container>
  )
}