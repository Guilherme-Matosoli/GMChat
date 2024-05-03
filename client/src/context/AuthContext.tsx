'use client';
import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return(
    <AuthContext.Provider value={{ name: "capota" }}>
      { children }
    </AuthContext.Provider>
  )
};