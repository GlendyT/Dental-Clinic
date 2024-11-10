import { ReactNode, useMemo } from "react";
import { FloatingContext } from "./FloatingContext";

type FloatingButtonProviderProps = {
  children: ReactNode;
};

export const FloatingButtonProvider = ({
  children,
}: FloatingButtonProviderProps) => {
  const timeNow = useMemo(
    () =>
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    []
  );


  return (
    <FloatingContext.Provider
      value={{
        timeNow,

      }}
    >
      {children}
    </FloatingContext.Provider>
  );
};
