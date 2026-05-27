"use client";

import { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';
import styles from '@/app/contacto/contacto.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando mensaje...' });

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: 'error', message: result.message });
    }
  }

  return (
    <div className={styles.contactFormContainer}>
      {status.type === 'success' ? (
        <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#e6f4ea', borderRadius: '8px', color: '#1e7e34' }}>
          <h3>¡Gracias!</h3>
          <p>{status.message}</p>
          <button 
            onClick={() => setStatus({ type: 'idle', message: '' })}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'var(--primary-blue)', color: 'white', borderRadius: '4px' }}
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
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
          
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {status.type === 'error' && (
            <p style={{ color: '#d93025', marginTop: '1rem', fontSize: '0.9rem' }}>{status.message}</p>
          )}
        </form>
      )}
    </div>
  );
}
