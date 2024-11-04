"use client"
import { useState } from 'react';
import styles from '@/styles/sideNavbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/wave.png'
import buttonImage from '../../../public/team.png'
import Dashboard from '../../../public/dashboard.png'
import User from '../../../public/user.png'
import Product from '../../../public/order.png'
import Blog from '../../../public/blog.png'
import SignIn from '../../../public/log-in.png'
import NotFound from '../../../public/notFound.png'
const SideNavbar: React.FC = () => {

 const[isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.sideNavbar}>
      <div className={styles.logo}>
       <Image src={logo} alt="logo" />
      </div>

      <div className={styles.dropdown}>
        <button  onClick={()=>setIsDropdownOpen(true)}>
        <label><Image src={buttonImage} alt="buttonImage" /></label>
        <span className={styles.team}>Team 1 <span className={styles.free}>Free</span></span>
        </button>
      {isDropdownOpen && (
      <div className={styles.dropdownContent}>
       <Link href="/link" className={styles.dropdownLink}>Link 1</Link>
       <Link href="/link" className={styles.dropdownLink}>Link 2</Link>
       <Link href="/link" className={styles.dropdownLink}>Link 3</Link>
      </div>
      )}
      </div>
      <nav className={styles.nav}>
        <Link href="/dashboard"  className={styles.navLink}>
        <label><Image src={Dashboard} alt='Dashboard'/></label>
        Dashboard
        </Link>
         <Link href="/user"  className={styles.navLink}>
        <label><Image src={User} alt='Dashboard'/></label>
         User
        </Link>
         <Link href="/product"  className={styles.navLink}>
        <label><Image src={Product} alt='Dashboard'/></label>
         Product
        </Link>
         <Link href="/blog"  className={styles.navLink}>
        <label><Image src={Blog} alt='Dashboard'/></label>
         Blog
        </Link>
         <Link href="/singin"  className={styles.navLink}>
        <label><Image src={SignIn} alt='Dashboard'/></label>
         Sing In
        </Link>
        <Link href="/not-fount" className={styles.navLink}>
        <label><Image src={NotFound} alt='Dashboard'/></label>
         Not Found
        </Link>
      </nav>
      <div className={styles.upgradeSection}>
        <p className={styles.upgradeText}>More Features?</p>
        <p className={styles.upgradePrice}>From Onlly <b>$69</b></p>
        <button className={styles.upgradeButton}>Upgrade to Pro</button>
      </div>
    </div>
  );
}

export default SideNavbar;