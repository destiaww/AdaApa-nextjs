import React, { useState, useEffect } from 'react';
import styles from 'ahmad/styles/navbar.module.css';
import { BsSearch, BsX, BsMenu } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_bar}>
        <FaBars className={styles.sidebarOpen} onClick={toggleMenu} />
        <span className={`${styles.logo} ${styles.navLogo}`}>
          <Image src={'./logo.svg'} width={136} height={44} />
        </span>

        <div className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
          <div className={styles.logo_toggle}>
            <span className={styles.logo}>
              <Image src={'./logo.svg'} width={136} height={44} />
            </span>
            <BsX className={styles.siderbarClose} onClick={toggleMenu} />
          </div>
          <ul className={styles.nav_links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Entertainment</Link>
            </li>
            <li>
              <Link href="#">Health</Link>
            </li>
            <li>
              <Link href="#">Sport</Link>
            </li>
            <li>
              <Link href="#">Political</Link>
            </li>
            <li>
              <Link href="#">Technology</Link>
            </li>
          </ul>
        </div>
        <div className={styles.searchBox}>
          <div className={`${styles.searchToggle} ${showSearch ? styles.active : ''}`} onClick={toggleSearch}>
            {showSearch ? <BsX className={styles.cancel} /> : <BsSearch className={styles.search} />}
          </div>

          <div className={`${styles.search_field} ${showSearch ? styles.active : ''}`}>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
