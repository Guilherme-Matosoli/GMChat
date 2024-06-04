'use client'
import { Content } from '@/components/Content';
import { Container } from './styles';
import { Header } from '@/components/Header';
import { LinkButton } from '@/components/Button/linkButton';


export const HomePage = () => {
  return (
    <Container>
      <Content>
        <Header />
        <div className="mainContent">
          <div className="introduction">
            <h2>INTRODUÇÃO</h2>
            <p>
              Bem-vindo ao GMChat! Nossa plataforma de bate-papo em tempo real foi projetada para conectar pessoas de forma rápida e segura. Com autenticação integrada e mensagens instantâneas, o GMChat oferece uma experiência de comunicação direta e eficiente.
            </p>
            <p>
              Você pode criar uma conta facilmente, seja registrando-se com seu e-mail ou número de telefone. Depois disso, conecte-se com amigos ou inicie uma conversa com alguém novo. O GMChat é intuitivo e fácil de usar, permitindo que você explore o bate-papo em tempo real de maneira simples e rápida.
            </p>
            <p>
              Experimente o GMChat hoje mesmo e descubra como ele pode simplificar suas conversas online! 🚀
            </p>
          </div>

          <div className="box">
            <p>
              Esta é uma aplicação completamente gratuíta sem fins lucrativos. <br />
              Por favor, não coloque nem compartilhe dados sensíveris e pessoais com ninguém.
            </p>
            <span>
              ❤️Desenvolvido com amor por: <a className="linkedinLink" href="https://www.linkedin.com/in/guilherme-matos-13b6a6229/" target='_blank'> &gt;Guilherme Matos&lt;</a>❤️
            </span>
          </div>

          <LinkButton href="auth/login">
            COMECE A SE DIVERTIR JÁ!
          </LinkButton>

          <footer>
            Copyright © {String(new Date().getFullYear())} GM Chat Company. Todos os direitos reservados.
          </footer>
        </div>
      </Content>
    </Container>
  )
};
