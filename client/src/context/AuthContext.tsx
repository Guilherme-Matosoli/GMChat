'use client';
import { createContext, useState } from "react";

interface User{
  email: string,
  name: string,
  username: string,
  id: number
}

interface UserInfos{
  token: string | undefined,
  user: User | undefined,
  setUserInfo: (user: User) => void
}

export const AuthContext = createContext({} as UserInfos);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  
  const setUserInfo = (user: User) => {
    setUser(user)
  };

  return(
    <AuthContext.Provider value={ { token, user, setUserInfo } }>
      { children }
    </AuthContext.Provider>
  )
};