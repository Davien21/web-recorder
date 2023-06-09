import React from "react";
import styles from "./select.module.scss";
import { FormikProps } from "formik";

type SelectType = {
  options: Array<string>;
  label?: string;
  className: string;
  id?: string;
  name: string;
  formik: FormikProps<any>;
  placeholder?: string | "";
};

function Select({
  options,
  label,
  className,
  id,
  name,
  formik,
  ...rest
}: SelectType) {
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

  let selectClassName = ``;
  if (formik?.values[name] === "") selectClassName += ` ${styles["disabled"]}`;

  return (
    <div className={classes}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <select
          className={selectClassName}
          id={id ?? name}
          name={name}
          {...rest}
        >
          {placeholder && <option disabled value="">{placeholder}</option>}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <div className={`${styles["error-message"]}`}>{error}</div>}
    </div>
  );
}

export { Select };
