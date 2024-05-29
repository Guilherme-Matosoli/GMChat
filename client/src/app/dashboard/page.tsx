'use client';
import { Container } from "./styles";

import { Header } from "@/components/Header";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { ContactList } from "@/components/ContactList";
import { ChatArea } from "@/components/ChatArea";
import { ChatContext } from "@/context/ChatContext";

export interface User {
  username: string,
  name: string,
  id: number
};

const Dashboard = () => {
  const context = useContext(AuthContext);
  const chatContext = useContext(ChatContext);

  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push('/auth/login');
      return;
    };
    setHasToken(true);

  }, [context]);

  return hasToken && (
    <Container>
      <Header />
      <main>
        <ContactList />
        <ChatArea chatId={chatContext.actualChat?.id} />
      </main>
    </Container>
  )
};

export default Dashboard;
