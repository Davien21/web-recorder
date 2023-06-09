import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./button.module.scss";
import { SpinnerIcon } from "components/SpinnerIcon";

type IFormType = "primary" | "secondary" | "plain" | "quaternary";

function Button({
  disabled = false,
  form = "primary",
  children,
  className,
  onClick,
  type = "button",
  state = "idle",
  href,
  ...rest
}: {
  disabled?: boolean;
  form?: IFormType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  state?: "idle" | "loading" | "success" | "error";
  href?: string;
  rest?: any;
}) {
  let containerClass = styles.container || "";
  if (form) containerClass += ` ${styles[form]}`;
  if (className) containerClass += ` ${className}`;

  const isLoading = state === "loading";

  if (href) {
    return (
      <Link href={href}>
        <a className={containerClass} {...rest}>
          {isLoading === true && <SpinnerIcon />}
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={containerClass}
      {...rest}
      disabled={disabled || isLoading}
    >
      {isLoading === true && <SpinnerIcon />}
      {children}
    </button>
  );
}

export { Button };
