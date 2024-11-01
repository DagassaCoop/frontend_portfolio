import { FC, PropsWithChildren } from "react";

// Components
import Button from "./Button.component";

// Assets
import cv from "@/assets/data/Bondar Software CV.pdf";

interface ILoadFileButtonProps extends PropsWithChildren {
  styles?: React.CSSProperties;
}

const LoadFileButton: FC<ILoadFileButtonProps> = ({ children, styles }) => {
  return (
    <a className="no-underline" href={cv} target="_blank" style={styles}>
      <Button>{children}</Button>
    </a>
  );
};

export default LoadFileButton;
