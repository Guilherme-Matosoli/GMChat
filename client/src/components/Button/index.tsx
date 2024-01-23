import { LinkButton } from "./linkButton";
import { RealButton } from "./realButton";


interface ButtonComponentProps{
  buttonType?: number, //Button type 1 return a Button element, type 2 return a Link element (default)
  children: React.ReactNode,
  href: string
};


export const Button: React.FC<ButtonComponentProps> = ( { buttonType, children, href } ) => {
  if(buttonType == 1){
    return <RealButton>{ children }</RealButton>
  }
  return <LinkButton href={ href }>{ children }</LinkButton>
};