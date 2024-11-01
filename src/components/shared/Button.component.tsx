import { PropsWithChildren, FC } from "react";

// Assets
import "@/assets/styles/components/shared/Button.scss";

interface IButtonProps extends PropsWithChildren {
  variant?: "white" | "black";
  classes?: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  variant,
  children,
  classes,
  styles,
  onClick,
}) => {
  return (
    <button
      className={[
        "button uppercase",
        classes,
        variant === "white" ? "button_white" : "",
      ].join(" ")}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
