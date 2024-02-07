import { LinkProps } from "next/link";
import { LinkContainer } from "./styles";
import { AnchorHTMLAttributes } from "react";

interface LinkButtonProps extends LinkProps{
  children: React.ReactNode
};

export const LinkButton: React.FC<LinkButtonProps> = ( { children, ...rest } ) => {
  return(
    <LinkContainer { ...rest }>
      { children }
    </LinkContainer>
  );
};