import React from "react";
import styles from "./header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>MOTION</h1>
        <div>
          <button className={styles.menuBtn}>IMAGE</button>
          <button className={styles.menuBtn}>Video</button>
          <button className={styles.menuBtn}>NOTE</button>
          <button className={styles.menuBtn}>TASK</button>
        </div>
      </header>
    </>
  );
};

export default Header;
