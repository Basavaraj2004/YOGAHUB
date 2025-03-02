import React from 'react';
import styles from './ProgramsFooter.module.css';

const ProgramsFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialMedia}>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className={styles.info}>
          <p>&copy; 2024 Yoga Academy. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default ProgramsFooter;
