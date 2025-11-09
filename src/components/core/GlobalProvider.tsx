"use client";
import React, { ReactNode } from "react";
import StoreProvider from "@/redux/StoreProvider";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default GlobalProvider;
