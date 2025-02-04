import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <div></div>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            <span>BLOG</span>
          </Link>
          <nav>
            <Link href="https://github.com/Ayxan23" target="_blank">
              Aykhan
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
