import React, { useState, useEffect } from 'react';
import styles from 'ahmad/styles/navbar.module.css';
import { BsSearch, BsX } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from 'ahmad/public/data/nav';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search/${searchQuery}`);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const { query } = router;
    const searchQuery = query.query || '';
    setSearchQuery(searchQuery);
  }, [router]);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_bar}>
        <FaBars className={styles.sidebarOpen} onClick={toggleMenu} />
        <span className={`${styles.logo} ${styles.navLogo}`}>
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={136} height={44} />
          </Link>
        </span>

        <div className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
          <div className={styles.logo_toggle}>
            <span className={styles.logo}>
              <Image src={'/logo.svg'} width={136} height={44} />
            </span>
            <BsX className={styles.siderbarClose} onClick={toggleMenu} />
          </div>
          <ul className={styles.nav_links}>
            {Nav.map((item, index) => (
              <li onClick={closeMenu} key={index}>
                <Link href={`/${item.Link}`}>{item.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.searchBox}>
          <form onSubmit={handleSearch}>
            <div className={`${styles.searchToggle} ${showSearch ? styles.active : ''}`} onClick={toggleSearch}>
              {showSearch ? <BsX className={styles.cancel} /> : <BsSearch className={styles.search} />}
            </div>

            <div className={`${styles.search_field} ${showSearch ? styles.active : ''}`}>
              <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchQueryChange} />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
