'use client';
import { Content } from "@/components/Content";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Input } from "@/components/Input";

import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { handleLogout } from "@/utils/handleLogout";

import { socket } from "@/services/io";
import { ContactList } from "@/components/ContactList";
import { UserFinder } from "@/components/UserFinder";

export interface User {
  username: string,
  name: string,
  id: number
};


const Dashboard = () => {
  const context = useContext(AuthContext);

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
      <Content>
        <Header />

        <main>
          <ContactList />

          <UserFinder />
        </main>
      </Content>
    </Container>
  )
};

export default Dashboard;
