import { createContext } from "react";

type PageContextType = {
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;
};

export const PageContext = createContext<PageContextType>(null!);
