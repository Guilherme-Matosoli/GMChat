import { GlobalStyle } from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "GMChat",
  description: "An application to texting with your friends",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Open+Sans:wght@800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlobalStyle/>
        <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
      </body>
    </html>
  );
};