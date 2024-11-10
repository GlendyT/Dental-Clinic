import { ReactNode, useMemo, useReducer, useRef } from "react";
import { FloatingContext } from "./FloatingContext";
import dummyAvatar from "../assets/logoeyaj.webp";
import { reducer } from "../reducer";

type FloatingButtonProviderProps = {
  children: ReactNode;
};

export const FloatingButtonProvider = ({
  children,
}: FloatingButtonProviderProps) => {
  const [{ isOpen, isDelay, isNotification }] = useReducer(reducer, {
    isOpen: false,
    isDelay: true,
    isNotification: false,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const loops = useRef(0);
  const notificationInterval = useRef(0);

  const timeNow = useMemo(
    () =>
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    []
  );



  return (
    <FloatingContext.Provider
      value={{
        timeNow,
        phoneNumber: "56126256",
        accountName: "Account Name",
        avatar: dummyAvatar,
        statusMessage: "",
        chatMessage: "Hola!🦷  \nComo podemos ayudarte?",
        placeholder: "Escribe tu mensaje..",
        isOpen,
        isDelay,
        isNotification,
        inputRef,
        soundRef,
        loops,
        notificationInterval,
        
      }}
    >
      {children}
    </FloatingContext.Provider>
  );
};
