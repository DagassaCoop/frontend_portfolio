import { FC, PropsWithChildren } from "react";

// Components
import Button from "./Button.component";

// Assets
import cv from "@/assets/data/Bondar Software CV.pdf";

interface ILoadFileButtonProps extends PropsWithChildren {
  classes?: string;
}

const LoadFileButton: FC<ILoadFileButtonProps> = ({ children, classes }) => {
  return (
    <a
      className={["no-underline", classes].join(" ")}
      href={cv}
      target="_blank"
    >
      <Button>{children}</Button>
    </a>
  );
};

export default LoadFileButton;
