import { ButtonHTMLAttributes } from "react";

import classes from "./Button.module.scss";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" className={[classes.button].join(" ")} {...props}>
      <svg
        className={classes.svg}
        viewBox="0 0 341 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M2.1846 42.5L45.5964 1.5H299.357L338.428 42.5L299.357 83.5H45.5964L2.1846 42.5Z"
          stroke="currentColor"
          stroke-width="3"
        />
      </svg>

      <div className={classes.text}>{children}</div>
    </button>
  );
};
