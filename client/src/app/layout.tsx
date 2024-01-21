/* eslint-disable @next/next/no-page-custom-font */
import { GlobalStyle } from '@/styles/GlobalStyles';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'GMChat',
  description: 'A chat application to text messages with your friends.',
};

interface RootLayoutProps{
  children: React.ReactNode
};

const RootLayout: NextPage<RootLayoutProps> = ( { children } ) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>      
        <GlobalStyle />
        { children }
      </body>
    </html>
  );
};

export default RootLayout;