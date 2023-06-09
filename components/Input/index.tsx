import React, { useState, SyntheticEvent } from "react";
import styles from "./input.module.css";
import { FormikProps } from "formik";
import { EyeIcon } from "assets/images";

type InputType = {
  type?: string;
  onClick?: () => void;
  label?: string;
  className: string;
  id?: string;
  name: string;
  formik: FormikProps<any>;
  placeholder?: string | "";
  [key: string]: any;
};

function Input({
  type,
  onClick,
  label,
  className,
  id,
  name,
  formik,
  ...rest
}: InputType) {
  const inputType = type || "text";
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const error: any = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];
  let placeholder = rest.placeholder;
  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      value: formik?.values[name],
    });
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (type !== "tel" && type !== "number") return;
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
      "Tab"
    ];
    const allowedKeysWithCtrl = ["a", "c", "v", "x", "z", "y"];
    const pressedCtrl = event.ctrlKey || event.metaKey;
    if (pressedCtrl && allowedKeysWithCtrl.includes(event.key)) return;
    if (allowedKeys.includes(event.key)) return;
    if (!/^[0-9.]$/.test(event.key)) event.preventDefault();
  };

  return (
    <div className={classes}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <input
          id={id ?? name}
          name={name}
          type={!isShowingPassword ? type : "text"}
          onClick={onClick}
          onKeyDown={handleKeyDown}
          onPaste={(e) => {
            if (type !== "tel" && type !== "number") return;
            const text = e.clipboardData.getData("text/plain");
            if (!/^[0-9.,]+$/.test(text)) e.preventDefault();
          }}
          {...rest}
          placeholder={placeholder || label}
        />
        {type === "password" && (
          <button
            onClick={() => setIsShowingPassword(!isShowingPassword)}
            type="button"
            className={`${styles["password-svg"]}`}
          >
            <EyeIcon />
          </button>
        )}
      </div>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Input };
