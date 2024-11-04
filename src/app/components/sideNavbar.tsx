"use client"
import { useState } from 'react';
import styles from '@/styles/sideNavbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const teams = [
    { id: 1, name: 'Team 1', type: 'Free', logo: '🔵' },
    { id: 2, name: 'Team 2', type: 'Pro', logo: '🌈' },
    { id: 3, name: 'Team 3', type: 'Pro', logo: '🔴' }
  ];

  return (
    <div className={styles.sideNavbar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>𝓝.</span>
      </div>

      <div className={styles.teamSelector}>
        <button 
          className={styles.teamButton} 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className={styles.teamInfo}>
            <span className={styles.teamLogo}>T1</span>
            <span className={styles.teamName}>Team 1</span>
            <span className={styles.teamType}>Free</span>
          </div>
          <span className={styles.arrow}>{isDropdownOpen ? '▲' : '▼'}</span>
        </button>
        
        {isDropdownOpen && (
          <div className={styles.teamDropdown}>
            {teams.map(team => (
              <button key={team.id} className={styles.teamOption}>
                <span className={styles.teamOptionLogo}>{team.logo}</span>
                <span className={styles.teamOptionName}>{team.name}</span>
                <span className={`${styles.teamOptionType} ${team.type === 'Pro' ? styles.proBadge : styles.freeBadge}`}>
                  {team.type}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <nav className={styles.nav}>
        <Link href="/dashboard" className={`${styles.navLink} ${pathname === '/dashboard' ? styles.active : ''}`}>
          <span className={styles.navIcon}>📊</span>
          <span>Dashboard</span>
        </Link>
        <Link href="/user" className={`${styles.navLink} ${pathname === '/user' ? styles.active : ''}`}>
          <span className={styles.navIcon}>👤</span>
          <span>User</span>
        </Link>
        <Link href="/product" className={`${styles.navLink} ${pathname === '/product' ? styles.active : ''}`}>
          <span className={styles.navIcon}>🛒</span>
          <span>Product</span>
        </Link>
        <Link href="/blog" className={`${styles.navLink} ${pathname === '/blog' ? styles.active : ''}`}>
          <span className={styles.navIcon}>📝</span>
          <span>Blog</span>
        </Link>
        <Link href="/signin" className={`${styles.navLink} ${pathname === '/signin' ? styles.active : ''}`}>
          <span className={styles.navIcon}>🔐</span>
          <span>Sign in</span>
        </Link>
        <Link href="/not-found" className={`${styles.navLink} ${pathname === '/not-found' ? styles.active : ''}`}>
          <span className={styles.navIcon}>⚠️</span>
          <span>Not found</span>
        </Link>
      </nav>

      <div className={styles.upgradeSection}>
        <h3 className={styles.upgradeTitle}>More features?</h3>
        <p className={styles.upgradePrice}>From only <strong>$69</strong></p>
        <button className={styles.upgradeButton}>Upgrade to Pro</button>
      </div>
    </div>
  );
}

export default SideNavbar;
