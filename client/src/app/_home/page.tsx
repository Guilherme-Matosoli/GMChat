"use client";
import { Container } from "./styles";
import { Button } from "@/components/Button";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";

const Home = () => {
  return (
    <Container>
      <Content>
        <Header />
      </Content>
    </Container>
  );
};

export default Home;