import { createContext, ReactNode } from "react";

type FloatingButtonProviderProps = {
  children: ReactNode;
};

export const FloatingButtonContext = createContext();

export const FloatingButtonProvider = ({
  children,
}: FloatingButtonProviderProps) => {
  return (
    <FloatingButtonContext.Provider value={{}}>
      {children}
    </FloatingButtonContext.Provider>
  );
};
