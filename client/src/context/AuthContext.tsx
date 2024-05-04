'use client';
import { createContext } from "react";

interface User{
  email: string,
  name: string,
  username: string,
  id: number
}

interface UserInfos{
  token: string,
  user: User
}

export const AuthContext = createContext({} as UserInfos);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const test = { token: "", user: { name: "", username: "", email: "", id: 22 } }

  return(
    <AuthContext.Provider value={ test }>
      { children }
    </AuthContext.Provider>
  )
};