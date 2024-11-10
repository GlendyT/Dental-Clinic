import { createContext } from "react";

type FloatingContextType = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: string
  ) => void;
  onClose?: () => void;
  onNotification?: () => void;
  onLoopDone?: () => void;
  phoneNumber: string;
  accountName: string;
  chatboxHeight?: number;
  chatboxStyle?: React.CSSProperties;
  chatboxClassName?: string;
  avatar?: string;
  statusMessage?: string;
  chatMessage?: string;
  placeholder?: string;
  notification?: boolean;
  notificationDelay?: number;
  notificationLoop?: number;
  notificationSound?: boolean;
  notificationSoundSrc?: string;
  notificationStyle?: React.CSSProperties;
  notificationClassName?: string;
  allowClickAway?: boolean;
  allowEsc?: boolean;
  darkMode?: boolean;
  style?: React.CSSProperties;
  className?: string;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
  timeNow: string
  isOpen: boolean
  isDelay: boolean
  isNotification: boolean  
  inputRef: React.MutableRefObject<HTMLInputElement | null>
  soundRef: React.MutableRefObject<HTMLAudioElement | null>
  loops: React.MutableRefObject<number>
  notificationInterval: React.MutableRefObject<number>
};

export const FloatingContext = createContext<FloatingContextType>(null!);
