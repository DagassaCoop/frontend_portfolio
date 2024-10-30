import { PropsWithChildren, FC } from "react";

// Assets
import "@/assets/styles/components/shared/buttonLink.scss";

interface IButtonLinkProps extends PropsWithChildren {
  variant?: "white" | "black";
  classes?: string;
  styles?: React.CSSProperties;
}

const ButtonLink: FC<IButtonLinkProps> = ({ children, classes, styles }) => {
  return (
    <button
      className={["button-link uppercase", classes].join(" ")}
      style={styles}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
