import React from 'react';
import styles from './ProgramsHeader.module.css';

const ProgramsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Our Programs</h1>
      </div>
    </header>
  );
};

export default ProgramsHeader;
