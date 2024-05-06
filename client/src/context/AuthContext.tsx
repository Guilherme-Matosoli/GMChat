'use client';
import { Dispatch, SetStateAction, createContext, useState } from "react";

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

  return(
    <AuthContext.Provider value={ { token, user, setUser, setToken } }>
      { children }
    </AuthContext.Provider>
  )
};