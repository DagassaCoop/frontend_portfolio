import { PropsWithChildren } from "react";

// Providers
import MUIProvider from "./MUI";

const Providers = ({ children }: PropsWithChildren) => {
  return <MUIProvider>{children}</MUIProvider>;
};

export default Providers;
