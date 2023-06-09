import React, { useState } from "react";
// import { SmallLogoIcon } from "../../assets/images";

import styles from "./styles.module.css";

const PageLoader = ({ pageLoader = true }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-blue-600 ${styles.container}`}
      style={{ opacity: "0.85" }}
    >
      <div
        className={`text-white relative flex justify-center items-center ${styles.circle}`}
      >
        Loading
      </div>
    </div>
  );
};

export { PageLoader };
