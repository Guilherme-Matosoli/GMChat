'use client';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface User{
  email: string,
  name: string,
  username: string,
  id: number
}

interface UserInfos{
  token: string | undefined,
  user: User | undefined,
  setUser: Dispatch<SetStateAction<User | undefined>>,
  setToken: Dispatch<SetStateAction<string | undefined>>,
}

export const AuthContext = createContext({} as UserInfos);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    const localStorageUser = localStorage.getItem("user");

    if(localStorageToken != undefined && localStorageUser != undefined){
      setToken(localStorageToken);
      setUser(JSON.parse(localStorageUser)); 
    };

    return;
  }, []);

  useEffect(() => {
    if(token && user){
      localStorage.setItem("token", token!);
      localStorage.setItem("userInfo",JSON.stringify(user));
    };
  }, [user, token]);

  return(
    <AuthContext.Provider value={ { token, user, setUser, setToken } }>
      { children }
    </AuthContext.Provider>
  )
};