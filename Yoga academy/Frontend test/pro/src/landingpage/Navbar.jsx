import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navLogo}>YogaHub</div>
      <ul className={styles.navMenu}>
        <li>
          <Link to='/adminvalidation'>Admin Panel</Link></li>
        <li className={styles.navLogin}>
          <Link to='/login'>Login</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
