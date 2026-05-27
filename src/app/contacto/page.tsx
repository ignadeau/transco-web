import ContactForm from '@/components/ContactForm/ContactForm';
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
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Información de Contacto</h2>
              <p>Estamos disponibles para resolver tus dudas técnicas y presupuestar tus proyectos con la mayor celeridad.</p>
              
              <ul className={styles.infoList}>
                <li>
                  <strong>📍 Dirección:</strong><br />
                  Camino Padre Hurtado #19498, San Bernardo, Región Metropolitana.
                </li>
                <li>
                  <strong>📞 Teléfono:</strong><br />
                  <a href="tel:+56940265446">+56 9 4026 5446</a>
                </li>
                <li>
                  <strong>📧 Correo Electrónico:</strong><br />
                  <a href="mailto:info@transcochile.cl">info@transcochile.cl</a><br />
                  <a href="mailto:administracion@transcochile.cl">administracion@transcochile.cl</a>
                </li>
                <li>
                  <strong>⏰ Horario de Atención:</strong><br />
                  Lunes a Viernes: 08:30 - 18:30
                </li>
              </ul>
            </div>

            <ContactForm />
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
          title="Ubicación de Constructora Transco"
        ></iframe>
      </section>
    </>
  );
}
