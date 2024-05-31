import { GlobalStyle } from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import { AuthProvider } from "@/context/AuthContext";
import { ChatProvider } from "@/context/ChatContext";

export const metadata: Metadata = {
  title: "GMChat",
  description: "An application to texting with your friends",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <AuthProvider>
      <ChatProvider>
        <html lang="pt-br">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
          </head>
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <GlobalStyle />
          </body>
        </html>
      </ChatProvider>
    </AuthProvider>
  );
};
