import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.highlight}>React + TS To Do</span> © 2025
      </p>
    </footer>
  );
};

export default Footer;
