'use client';
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { disableToast } from "@/utils/alert";
import { useRouter } from "next/navigation";

interface AuthLayoutProps {
  children?: React.ReactNode
};

const AuthLayout: React.FC<AuthLayoutProps> = ( { children } ) => {
  const [hasToken, setHasToken] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token != undefined){
      router.push("/dashboard");
      return
    };

    setHasToken(true);

    return () => {
      setTimeout(() => disableToast(), 1000);
    };
  }, []);

  return hasToken &&(
    <Container>
      <a href="/">
        <img src="/gm-auth-responsive.svg" alt="GMChat" className="logo"/>
      </a>

      <main className="content">
        <div className="formArea">
          <div className="form">
            { children }
          </div>
        </div>

        <div className="aside">
          <a href="/">
            <img 
              src="/gm-auth.svg" 
              alt="GMChat" 
              draggable={false}
            />
          </a>
        </div>
      </main>
    </Container>
  );
};

export default AuthLayout;