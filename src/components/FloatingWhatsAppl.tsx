import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from "./Icons";
import css from "../components/styles.module.css";
import darkBG from "../assets/bg-chat-tile-light.png";
import lightBG from "../assets/bg-chat-tile-dark.png";
import SoundBeep from "../assets/whatsapp-notification.mp3";
import { useFloating } from "../hooks/useFloating";

export interface FloatingWhatsAppProps {
  notificationSound?: boolean;
  notificationSoundSrc?: string;
  notificationStyle?: React.CSSProperties;
  notificationClassName?: string;

  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;

  chatboxHeight?: number;
  chatboxStyle?: React.CSSProperties;
  chatboxClassName?: string;

  darkMode?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function FloatingWhatsApp({
  notificationSound = false,
  notificationSoundSrc = SoundBeep,
  notificationStyle,
  notificationClassName = "floating-whatsapp-notification",

  buttonStyle,
  buttonClassName = "floating-whatsapp-button",

  chatboxHeight = 320,
  chatboxStyle,
  chatboxClassName = "floating-whatsapp-chatbox",

  darkMode = false,
  style,
  className = "floating-whatsapp",
}: FloatingWhatsAppProps) {
  const {
    timeNow,
    handleOpen,
    accountName,
    statusMessage,
    handleClose,
    chatMessage,
    handleSubmit,
    inputRef,
    placeholder,
    soundRef,
    avatar,
    isNotification,
    isOpen,
    isDelay,
  } = useFloating();

  return (
    <div
      className={`${css.floatingWhatsapp} ${
        darkMode ? `${css.dark} ` : ""
      } ${className}`}
      style={style}
    >
      <div
        className={`${css.whatsappButton} ${buttonClassName}`}
        onClick={handleOpen}
        style={buttonStyle}
        //aria-hidden="true"
      >
        <WhatsappSVG />
        {isNotification && (
          <span
            className={`${css.notificationIndicator} ${notificationClassName}`}
            style={notificationStyle}
          >
            1
          </span>
        )}
      </div>

      <div
        className={`${css.whatsappChatBox} ${
          isOpen ? css.open : css.close
        } ${chatboxClassName}`}
        onClick={(event) => event.stopPropagation()}
        //aria-hidden="true"
        style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}
      >
        <header className={css.chatHeader}>
          <div className={css.avatar}>
            <img src={avatar} width="60" height="60" alt="whatsapp-avatar" />
          </div>
          <div className={css.status}>
            <span className={css.statusTitle}>{accountName}</span>
            <span className={css.statusSubtitle}>{statusMessage}</span>
          </div>
          <div
            className={css.close}
            onClick={handleClose}
            // aria-hidden="true"
          >
            <CloseSVG />
          </div>
        </header>

        <div
          className={css.chatBody}
          style={{ backgroundImage: `url(${darkMode ? darkBG : lightBG})` }}
        >
          {isDelay ? (
            <div className={css.chatBubble}>
              <div className={css.typing}>
                <div className={css.dot} />
                <div className={css.dot} />
                <div className={css.dot} />
              </div>
            </div>
          ) : (
            <div className={css.message}>
              <span className={css.triangle} />
              <span className={css.accountName}>{accountName}</span>
              <p className={css.messageBody}>{chatMessage}</p>
              <span className={css.messageTime}>
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>

        <footer className={css.chatFooter}>
          <form onSubmit={handleSubmit}>
            <input
              className={css.input}
              placeholder={placeholder}
              ref={inputRef}
              dir="auto"
            />
            <button type="submit" className={css.buttonSend}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
      {notificationSound && (
        <audio ref={soundRef} hidden src={notificationSoundSrc} />
      )}
    </div>
  );
}
