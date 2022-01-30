import React from "react";
import styles from "./header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={styles.banner}>
        <h1>MOTION</h1>
        <ul className={styles.controlPanel}>
          <li>
            <button className={styles.menuBtn}>Image</button>
          </li>
          <li>
            <button className={styles.menuBtn}>Video</button>
          </li>
          <li>
            <button className={styles.menuBtn}>NOTE</button>
          </li>
          <li>
            <button className={styles.menuBtn}>Todo</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
