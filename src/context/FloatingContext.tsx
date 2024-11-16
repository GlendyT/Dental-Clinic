import { createContext } from "react";

type FloatingContextTypeProps = {
  phoneNumber: string;
  accountName: string;
  avatar?: string;
  statusMessage?: string;
  chatMessage?: string;
  placeholder?: string;
  timeNow: string;
  isOpen: boolean;
  isDelay: boolean;
  isNotification: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  soundRef: React.MutableRefObject<HTMLAudioElement | null>;
  loops: React.MutableRefObject<number>;
  notificationInterval: React.MutableRefObject<number>;
  handleOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  className?: string
  style?: React.CSSProperties;
  darkMode?: boolean;
  notificationSound?: boolean;
  chatboxClassName?: string;
  chatboxStyle?: React.CSSProperties;
  chatboxHeight?: number;
  notificationSoundSrc?: string;
  notificationStyle?: React.CSSProperties;
  notificationClassName?: string;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
};

export const FloatingContext = createContext<FloatingContextTypeProps>(null!);