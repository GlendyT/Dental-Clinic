import { EmblaViewportRefType } from "embla-carousel-react";
import { createContext } from "react";

type SlideContextType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
    emblaRef: EmblaViewportRefType
  };
  export const SlideContext = createContext<SlideContextType>(null!);
