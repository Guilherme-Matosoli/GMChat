import { TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{

};

export const TextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
  return(
    <Container { ...rest } />
  );
};