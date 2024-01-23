import { LinkProps } from "next/link";
import { Container } from "./styles"

interface HeaderButtonProps extends LinkProps{
  children: React.ReactNode,
  buttonType?: number
};

//ButtonType 1 define as white background, default type is gradient background

export const HeaderButton: React.FC<HeaderButtonProps> = ( { children , buttonType, ...props } ) => {
  return (
    <Container { ...props } className={ buttonType == 1 ? "white" : "gradient" }>
      { children }
    </Container>      
  );
};