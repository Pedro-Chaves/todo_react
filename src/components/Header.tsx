import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React To Do</h1>
    </header>
  );
};

export default Header;
