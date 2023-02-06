import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import styles from "./main-nav.module.css";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
