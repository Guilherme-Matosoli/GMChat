import { useContext } from 'react';
import { Container } from './styles';
import { AuthContext } from '@/context/AuthContext';

interface MessageProps{
  name: string,
  content: string,
  time: string
};

export const Message: React.FC<MessageProps> = ({ name, content, time }) => {
  const { user } = useContext(AuthContext);

  const messageTime = new Date(time);
  const formatedTime = `${ messageTime.getHours() }:${ messageTime.getMinutes() }`;

  return(
    <Container className={ user?.name == name ? 'mine' : '' }>
      <span className='userName'>
        { name == user?.name ? "Você" : name }
      </span>

      <p className='messageContent'>
        { content }
      </p>

      <span className="time">
        { formatedTime }
      </span>
    </Container>
  )
}