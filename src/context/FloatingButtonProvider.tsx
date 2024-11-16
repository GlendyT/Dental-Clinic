import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import dummyAvatar from "../assets/logoeyaj.webp";
import { reducer } from "../reducer";
import { FloatingContext } from "./FloatingContext";


type FloatingButtonProviderProps = {
  children: ReactNode;

  notificationDelay?: number;
  notificationLoop?: number;
  notificationSound?: boolean;
  onNotification?: () => void;
  onLoopDone?: () => void;
  notification: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: () => void;
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: string
  ) => void;
  allowClickAway?: boolean;
  allowEsc?: boolean;
  phoneNumber: string;
  accountName: string;
  className?: string
  style?: React.CSSProperties;
  darkMode?: boolean;
  chatboxClassName?: string;
  chatboxStyle?: React.CSSProperties;
  chatboxHeight?: number;
  notificationSoundSrc?: string;
  notificationStyle?: React.CSSProperties;
  notificationClassName?: string;

  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;

};

const FloatingButtonProvider = ({
  children,
  notification = true,
  onNotification,
  notificationLoop = 0,
  notificationSound,
  onLoopDone,
  notificationDelay = 60,
  onClick,
  onClose,
  onSubmit,
  allowClickAway = true,
  allowEsc,
  phoneNumber,
  accountName,
  className,
  style,
  darkMode,
  chatboxClassName,
  chatboxStyle,
  chatboxHeight,
  notificationSoundSrc,
  notificationStyle,
  notificationClassName,

  buttonStyle,
  buttonClassName,

}: FloatingButtonProviderProps) => {
  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
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

  const handleNotification = useCallback(() => {
    if (!notification) return;

    dispatch({ type: "notification" });
    if (onNotification) onNotification();
    if (notificationLoop > 0) {
      loops.current += 1;

      if (notificationSound) {
        if (soundRef.current) {
          soundRef.current.currentTime = 0;
          soundRef.current.play();
        }
      }
      if (loops.current === notificationLoop) {
        clearInterval(notificationInterval.current);
        if (onLoopDone) onLoopDone();
      }
    }
  }, [
    notification,
    onNotification,
    notificationLoop,
    loops,
    notificationSound,
    soundRef,
    notificationInterval,
    onLoopDone,
  ]);

  useEffect(() => {
    const delayInSecond = notificationDelay * 1000;
    if (delayInSecond < 10)
      return console.error(
        "notificationDelay prop value must be at least 10 seconds."
      );

    notificationInterval.current = window.setInterval(
      handleNotification,
      delayInSecond
    );

    return () => clearInterval(notificationInterval.current);
  }, [handleNotification, notificationDelay, notificationInterval]);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (isOpen) return;

      clearInterval(notificationInterval.current);
      dispatch({ type: "open" });
      setTimeout(() => dispatch({ type: "delay" }), 2000);
      if (onClick) onClick(event);
    },
    [isOpen, notificationInterval, onClick]
  );

  const handleClose = useCallback(() => {
    dispatch({ type: "close" });

    if (onClose) onClose();
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current?.value) return;

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${inputRef.current.value}`
    );
    if (onSubmit) onSubmit(event, inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    const onClickOutside = () => {
      if (!allowClickAway || !isOpen) return;

      handleClose();
    };
    document.addEventListener("click", onClickOutside, false);

    return () => document.removeEventListener("click", onClickOutside);
  }, [allowClickAway, isOpen, handleClose]);

  useEffect(() => {
    const onEscKey = (event: KeyboardEvent) => {
      if (!allowEsc || !isOpen) return;

      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onEscKey, false);

    return () => document.removeEventListener("keydown", onEscKey);
  }, [allowEsc, isOpen, handleClose]);

  return (
    <FloatingContext.Provider
      value={{
        timeNow,
        phoneNumber,
        accountName,
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
        handleOpen,
        handleSubmit,
        handleClose,
        className,
        style,
        darkMode,
        notificationSound,
        chatboxClassName,
        chatboxStyle,
        chatboxHeight,
        notificationSoundSrc,
        notificationStyle,
        notificationClassName,

        buttonStyle,
        buttonClassName,

      }}
    >
      {children}
    </FloatingContext.Provider>
  );
};

export { FloatingButtonProvider };

export default FloatingContext;
