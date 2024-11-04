import SideNavbar from '@/app/components/sideNavbar';
import HomePage from '@/app/components/home';
import styles from '@/styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <SideNavbar/>
      <HomePage/>
    </div>
  );
}
