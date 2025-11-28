import styles from '../styles/components.module.scss';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#projects">Projects</Link>
        </div>
        <div className={styles.footerSocial}>
          {/* --- CAMBIA ESTOS ENLACES POR LOS TUYOS --- */}
          <a href="https://github.com/LautiiPaz" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/lautii-paz/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="lautaroapaz@gmail.com">
            Email
          </a>
        </div>
        <div className={styles.footerCopyright}>
          <p>&copy; {currentYear} Lautaro A. Paz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}