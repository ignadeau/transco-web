import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const clients = [
    { name: 'CCTI', src: '/logos/ccti.png' },
    { name: 'Buses Vule', src: '/logos/buses-vule.png' },
    { name: 'Falabella', src: '/logos/falabella.png' },
    { name: 'CLEP', src: '/logos/clep.jpg' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Constructora de Obras Civiles y Proyectos de Pavimentación Urbana</h1>
            <p>Especialistas en soluciones viales, movimiento de tierras y pavimentación asfáltica de alto tráfico con calidad garantizada.</p>
            <Link href="/contacto" className={styles.ctaButton}>
              Cotiza tu proyecto
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Nuestros Servicios Especializados</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/img/movimiento-tierras.png" alt="Movimiento de Tierras" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Movimiento de Tierras</h3>
              <p>Preparación de terrenos y excavaciones con maquinaria de última generación para proyectos industriales y viales.</p>
            </div>
            <div className={styles.serviceCard}>
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/img/proyecto-vial.png" alt="Pavimentación Asfáltica" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Pavimentación Asfáltica</h3>
              <p>Expertos en mezcla asfáltica en caliente para caminos, estacionamientos y plataformas industriales.</p>
            </div>
            <div className={styles.serviceCard}>
              <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/img/obras-civiles.png" alt="Obras Civiles" fill style={{ objectFit: 'cover' }} />
              </div>
              <h3>Obras Civiles</h3>
              <p>Construcción de infraestructura civil, soleras, veredas y sistemas de evacuación de aguas lluvias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={`${styles.trustSection} section-padding`}>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Empresas que confían en nuestro trabajo</h2>
          <div className={styles.clientLogos}>
            {clients.map((client) => (
              <div key={client.name} className={styles.clientLogoWrapper}>
                <Image 
                  src={client.src} 
                  alt={`Logo de ${client.name}`} 
                  width={150} 
                  height={80} 
                  className={styles.clientLogoImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Testimonios de nuestros clientes</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Para la construcción y mantenimiento de nuestro depósito en Santiago, confiamos en Cumbres. Un perfecto equilibrio entre calidad y precio."
              </p>
              <p className={styles.testimonialAuthor}>Errol Jouannet</p>
              <p style={{ fontSize: '0.85rem' }}>Gerente General CCTI - Región Metropolitana</p>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Se encargaron de construir una superficie de 60.000 m2 en tiempo y calidad requerida para nuestro depósito en San Antonio."
              </p>
              <p className={styles.testimonialAuthor}>Director Logístico</p>
              <p style={{ fontSize: '0.85rem' }}>Buses Vule - Región de Valparaíso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>¿Listo para iniciar tu obra?</h2>
          <p style={{ marginBottom: '2rem' }}>Contáctanos hoy mismo para una asesoría técnica y presupuesto detallado.</p>
          <Link href="/contacto" className={styles.ctaButton}>
            Hablar con un experto
          </Link>
        </div>
      </section>
    </>
  );
}
