import { PropsWithChildren, createContext, useState } from "react";

interface IScrollValue {
  top: number;
  left: number;
}

interface IScrollContext {
  scroll: IScrollValue;
  setScroll: React.Dispatch<React.SetStateAction<IScrollValue>>;
}

export const ScrollContext = createContext<IScrollContext | null>(null);

const ScrollContextProvider = ({ children }: PropsWithChildren) => {
  const [scroll, setScroll] = useState<IScrollValue>({ top: 0, left: 0 });

  return (
    <ScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
