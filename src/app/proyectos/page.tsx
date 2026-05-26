import styles from './proyectos.module.css';

export const metadata = {
  title: 'Proyectos',
  description: 'Explora nuestra galería de proyectos destacados en pavimentación de alto tráfico, obras viales y construcción civil para importantes clientes en todo Chile.',
};

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Depósito Logístico Santiago",
      cliente: "CCTI",
      superficie: "50.000 m2",
      descripcion: "Pavimentación de alto tráfico y sistemas de drenaje para centro de distribución.",
      tipo: "Pavimentación"
    },
    {
      id: 2,
      titulo: "Terminal de Buses San Antonio",
      cliente: "Buses Vule",
      superficie: "60.000 m2",
      descripcion: "Construcción de losas de hormigón armado y asfalto para flota de alto tonelaje.",
      tipo: "Obras Civiles"
    },
    {
      id: 3,
      titulo: "Centro de Distribución Norte",
      cliente: "Falabella",
      superficie: "35.000 m2",
      descripcion: "Movimiento de tierras y pavimentación industrial.",
      tipo: "Movimiento de Tierras"
    },
    {
      id: 4,
      titulo: "Urbanización Industrial San Bernardo",
      cliente: "Varios",
      superficie: "20.000 m2",
      descripcion: "Pavimentación de calles y construcción de veredas/soleras.",
      tipo: "Obras Viales"
    }
  ];

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Nuestros Proyectos</h1>
          <p>Construcción de pavimentos de alto tráfico y calidad garantizada</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.proyectosGrid}>
            {proyectos.map((proy) => (
              <div key={proy.id} className={styles.proyectoCard}>
                <div className={styles.proyectoImage}>
                  {/* Placeholder */}
                  <div style={{ backgroundColor: '#eee', width: '100%', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    [Imagen Proyecto {proy.id}]
                  </div>
                </div>
                <div className={styles.proyectoInfo}>
                  <span className={styles.tag}>{proy.tipo}</span>
                  <h3>{proy.titulo}</h3>
                  <p><strong>Cliente:</strong> {proy.cliente}</p>
                  <p><strong>Superficie:</strong> {proy.superficie}</p>
                  <p className={styles.desc}>{proy.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p style={{ marginBottom: '2rem' }}>Estamos preparados para enfrentar desafíos de cualquier escala con eficiencia y calidad.</p>
          <a href="/contacto" className={styles.ctaButton}>Solicitar Presupuesto</a>
        </div>
      </section>
    </>
  );
}
