import { TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref: React.Ref<HTMLTextAreaElement>
};

export const TextArea: React.FC<TextAreaProps> = ({ ref, ...rest }) => {
  return (
    <Container {...rest} ref={ref} />
  );
};
