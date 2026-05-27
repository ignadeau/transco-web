import Image from 'next/image';
import styles from './nosotros.module.css';

export const metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce más sobre Constructora Cumbres, con más de 20 años de trayectoria liderando proyectos de pavimentación y obras civiles en la Región Metropolitana y todo Chile.',
};

export default function QuienesSomos() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Nuestra Empresa</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <h2>Más de 20 años construyendo excelencia</h2>
              <p>
                En el año 1990 comienzan nuestras operaciones bajo una unidad de negocio centrada en la venta de áridos, lo que rápidamente permitió que la empresa comience su desarrollo en el rubro de la construcción.
              </p>
              <p>
                Hoy en día este crecimiento ha permitido a nuestra organización incursionar en rubros como la pavimentación, movimiento de tierra, construcción de obras civiles, entre otras áreas, consolidándonos como un referente de soluciones viales y movimiento de tierras para el sector industrial.
              </p>
              <p>
                Nuestra trayectoria se basa en el compromiso con la calidad y la satisfacción de nuestros clientes, entregando obras duraderas que cumplen con los más altos estándares técnicos del mercado.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image 
                  src="/img/quienes-somos.png" 
                  alt="Equipo y maquinaria de Constructora Cumbres en obra" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className={styles.missionVisionGrid}>
            <div className={styles.card}>
              <h3>Misión</h3>
              <p>
                Ofrecer soluciones integrales a las necesidades de pavimentación y otras obras de ingeniería civil de nuestros clientes, basándonos en la experiencia y capacidad del equipo humano que conforma nuestra constructora.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Visión</h3>
              <p>
                Liderar el mercado de construcción, pavimentación y obras civiles a nivel regional y nacional con una línea de trabajo sustentable, eficiente y eficaz en todas las obras que se desarrollen bajo la actuación de la constructora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span>🤝</span>
              <h4>Confianza</h4>
              <p>En nuestros clientes y colaboradores como base de toda relación comercial.</p>
            </div>
            <div className={styles.valueItem}>
              <span>💎</span>
              <h4>Transparencia</h4>
              <p>Actuamos con integridad y claridad en cada etapa del proceso constructivo.</p>
            </div>
            <div className={styles.valueItem}>
              <span>👥</span>
              <h4>Trabajo en Equipo</h4>
              <p>Sincronización y colaboración para alcanzar metas comunes con éxito.</p>
            </div>
            <div className={styles.valueItem}>
              <span>🌿</span>
              <h4>Medio Ambiente</h4>
              <p>Respeto y compromiso con el entorno en cada una de nuestras obras.</p>
            </div>
            <div className={styles.valueItem}>
              <span>✅</span>
              <h4>Calidad Profesional</h4>
              <p>Excelencia técnica y rigurosidad en la ejecución de cada proyecto.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
