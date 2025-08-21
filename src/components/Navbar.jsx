import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar navbar-dark shadow-sm py-2 ${styles.navbar}`}> 
      <div className="container">
        <Link className={`navbar-brand fw-bold d-flex align-items-center ${styles.brand}`} to="/">
          <i className="bi bi-lightbulb-fill me-2 text-warning fs-3"></i>
          <span>Word Daily</span>
        </Link>

        {/* Hamburger (only visible on small screens) */}
        <button
          className={`navbar-toggler d-lg-none`} 
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Nav (always visible on lg+) */}
        <div className={`d-none d-lg-flex ms-auto`}>
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/word" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Today’s Word</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/archive" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookmark" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Bookmarks</NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''} d-lg-none`}>
          <button className={styles.closeBtn} onClick={closeMenu}>
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink onClick={closeMenu} to="/" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')} end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu} to="/word" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Today’s Word</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu} to="/archive" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Explore</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={closeMenu} to="/bookmark" className={({isActive}) => 'nav-link' + (isActive ? ' ' + styles.active : '')}>Bookmarks</NavLink>
            </li>
          </ul>
        </div>

        {/* Overlay for mobile */}
        {isOpen && <div className={`${styles.overlay} d-lg-none`} onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;
