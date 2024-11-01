import { PropsWithChildren } from "react";

// Providers
import MUIProvider from "./MUI";
import ScrollContextProvider from "./ScrollContext";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MUIProvider>
      <ScrollContextProvider>{children}</ScrollContextProvider>
    </MUIProvider>
  );
};

export default Providers;
