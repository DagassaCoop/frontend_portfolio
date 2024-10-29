import { PropsWithChildren } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

const MUIProvider = ({ children }: PropsWithChildren) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default MUIProvider;
