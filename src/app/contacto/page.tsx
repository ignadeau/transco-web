import styles from './contacto.module.css';

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos para tus proyectos de pavimentación asfáltica, hormigón y obras civiles. Estamos ubicados en San Bernardo y atendemos a todo Chile.',
};

export default function Contacto() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Contáctanos</h1>
          <p>Especialistas en pavimentación asfáltica y hormigón listos para ayudarte</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.centeredContent}>
            <div className={styles.contactCard}>
              <h2>Canales Directos</h2>
              <p className={styles.lead}>Estamos disponibles para resolver tus dudas técnicas y presupuestar tus proyectos con la mayor celeridad.</p>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.icon}>📍</div>
                  <h3>Dirección</h3>
                  <p>Camino Padre Hurtado #19498,<br />San Bernardo, Región Metropolitana.</p>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.icon}>📞</div>
                  <h3>Teléfono</h3>
                  <p><a href="tel:+56940265446" className={styles.phoneLink}>+56 9 4026 5446</a></p>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.icon}>⏰</div>
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes<br />08:30 - 18:30</p>
                </div>
              </div>

              <div className={styles.ctaWrapper}>
                <a href="tel:+56940265446" className={styles.callNowBtn}>
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          src="https://maps.google.com/maps?q=Camino%20Padre%20Hurtado%2019498%2C%20San%20Bernardo%2C%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
          title="Ubicación de Constructora Cumbres"
        ></iframe>
      </section>
    </>
  );
}
