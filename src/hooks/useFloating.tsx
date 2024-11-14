import { useContext } from "react";
import FloatingContext from "../context/FloatingButtonProvider";



export const useFloating = () => {
  return useContext(FloatingContext);
};
