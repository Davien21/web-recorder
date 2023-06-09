// Breadcrumbs.tsx

import styles from "./breadcrumbs.module.scss";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className={`mt-2 ${styles.container}`}>
      <ol>
        {pathnames.length > 0 && (
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        )}

        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isCurrentPage = index === pathnames.length - 1;

          return (
            <li key={index}>
              {!isCurrentPage && (
                <Link href={path}>
                  <a>{value}</a>
                </Link>
              )}
              {isCurrentPage && <span className={styles.current}>{value}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
