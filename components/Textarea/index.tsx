import React, { useState, SyntheticEvent } from "react";
import styles from "./textarea.module.css";
import { FormikProps } from "formik";

type InputType = {
  label?: string;
  className: string;
  id?: string;
  name: string;
  formik: FormikProps<any>;
  placeholder?: string | "";
};

function TextArea({
  label,
  className,
  id,
  name,
  formik,
  ...rest
}: InputType) {
  const [isFocused, setIsFocused] = useState(false);
  const error: any = formik.touched[name] && formik.errors?.[name];
  let classes = `${styles.container} ${className} `;
  if (error) classes += styles["error"];
  let placeholder = rest.placeholder;
  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      onBlur: (e: SyntheticEvent) => {
        setIsFocused(false);
        return formik?.handleBlur(e);
      },
      value: formik?.values[name],
    });
  }

  return (
    <div className={classes}>
      {label && (
        <label
          className={isFocused ? `${styles["active"]}` : ""}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          id={id ?? name}
          name={name}
          onFocus={() => setIsFocused(true)}
          {...rest}
          placeholder={placeholder || label}
        />
      </div>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { TextArea };
