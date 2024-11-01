import { useContext } from "react";

// Context
import { ScrollContext } from "@/app/providers/ScrollContext";

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error(
      "useScrollContext must be used within ScrollContextProvider!",
    );
  }

  return context;
};
