import { Content } from "@/components/Content";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";


const Dashboard = () => {
  return (
    <Container>
      <Content>
        <Header />

        <main>
          <div className="topSide">
            <h2>Lista de contatos</h2>
          </div>

          <div className="contacts">
            <Contact />
          </div>
        </main>
      </Content>
    </Container>
  )
};

export default Dashboard;
