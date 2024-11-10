import { useContext } from "react";
import { FloatingContext } from "../context/FloatingContext";


export const useFloating = () => {
  return useContext(FloatingContext);
};
