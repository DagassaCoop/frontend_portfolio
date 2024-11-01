import { PropsWithChildren, FC } from "react";

// Assets
import "@/assets/styles/components/shared/Button.scss";

interface IButtonProps extends PropsWithChildren {
  variant?: "white" | "black";
  classes?: string;
  styles?: React.CSSProperties;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  variant,
  children,
  classes,
  styles,
  type,
  onClick,
}) => {
  return (
    <button
      type={type ?? undefined}
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
