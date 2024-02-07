import { LinkProps } from "next/link";
import { LinkContainer } from "./styles";
import { AnchorHTMLAttributes } from "react";

interface LinkButtonProps extends LinkProps{
  children: React.ReactNode
  type?: number //type 2 define background as white
};

export const LinkButton: React.FC<LinkButtonProps> = ( { children, type, ...rest } ) => {
  return(
    <LinkContainer { ...rest } className={ type == 2 ? 'white' : '' }>
      { children }
    </LinkContainer>
  );
};