import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import { useRouteChangeHandler } from "hooks";

export function Nav() {
  const { isPageLoading } = useRouteChangeHandler();

  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isPageLoading) setIsActive(false);
  }, [isPageLoading]);

  let menuIconContainerClass = `${styles["menu-icon"]} scale-125 sm:scale-105`;
  if (isActive) menuIconContainerClass += ` ${styles["active"]} `;

  let navContainerClass = `${styles["nav"]}`;
  if (isActive) navContainerClass += ` ${styles["active"]}`;

  let containerClass = `${styles["container"]} container pb-2 pt-4`;
  if (isActive) containerClass += ` ${styles["active"]}`;

  return (
    <div className={containerClass}>
      <div className={`${styles["header"]} flex gap-x-6 items-end`}>
        <div className={menuIconContainerClass} onClick={handleMenuClick}>
          <span
            className={`${styles["menu-icon-line"]} ${styles["menu-icon-line-left"]}`}
          ></span>
          <span className={`${styles["menu-icon-line"]}`}></span>
          <span
            className={`${styles["menu-icon-line"]} ${styles["menu-icon-line-right"]}`}
          ></span>
        </div>
        <span className={`${styles["title"]}`}>Budgeta</span>
      </div>

      <div className={navContainerClass}>
        <div className={styles["nav-content"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-list-item"]}>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li className={styles["nav-list-item"]}>
              <Link href={"/expenses"}>
                <a>Expenses</a>
              </Link>
            </li>
            <li className={styles["nav-list-item"]}>
              <Link href={"/add"}>
                <a>Add Expense</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
