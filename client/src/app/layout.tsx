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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;