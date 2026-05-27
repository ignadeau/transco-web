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

            <div className={styles.contactFormContainer}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre aquí" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono de Contacto</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="+56 9 XXXX XXXX" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">Mensaje o Detalle del Proyecto</label>
                  <textarea id="mensaje" name="mensaje" rows={5} placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>Enviar Mensaje</button>
              </form>
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
          title="Ubicación de Constructora Transco"
        ></iframe>
      </section>
    </>
  );
}
