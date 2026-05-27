import Link from 'next/link';
import Logo from '../Logo';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>📞 +56 9 40265446</span>
              </div>
              <div className={styles.contactItem}>
                <span>📍 San Bernardo, Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mainHeader}>
        <div className="container">
          <nav className={styles.navContainer}>
            <Link href="/" className={styles.logoContainer}>
              <Logo width={180} height={50} />
            </Link>
            
            <ul className={styles.navLinks}>
              <li><Link href="/" className={styles.navLink}>Inicio</Link></li>
              <li><Link href="/quienes-somos" className={styles.navLink}>Quiénes Somos</Link></li>
              <li><Link href="/proyectos" className={styles.navLink}>Proyectos</Link></li>
              <li><Link href="/contacto" className={styles.navLink}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
