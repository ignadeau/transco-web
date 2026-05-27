import Link from 'next/link';
import Logo from '../Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Logo width={200} height={60} className={styles.footerLogo} />
            <p style={{ marginTop: '1rem' }}>Especialistas en pavimentación y obras civiles con más de 20 años de experiencia entregando calidad y confianza en cada proyecto.</p>
          </div>
          
          <div>
            <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Inicio</Link></li>
              <li><Link href="/quienes-somos" className={styles.footerLink}>Quiénes Somos</Link></li>
              <li><Link href="/proyectos" className={styles.footerLink}>Proyectos</Link></li>
              <li><Link href="/contacto" className={styles.footerLink}>Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={styles.footerTitle}>Contacto</h3>
            <ul className={styles.footerLinks}>
              <li>📍 Camino Padre Hurtado #19498, San Bernardo</li>
              <li>📞 +56 9 40265446</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} Constructora Cumbres Chile. Todos los derechos reservados.</p>
          <p>Desarrollado con enfoque SEO de alta precisión.</p>
        </div>
      </div>
    </footer>
  );
}
