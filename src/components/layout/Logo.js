import Image from "next/image";
import React from "react";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/site/introvert-event.jpg"
        alt="logo"
        width={20}
        height={20}
      />
    </div>
  );
};

export default Logo;
