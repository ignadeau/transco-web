"use server";

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !mensaje) {
    return { success: false, message: 'Por favor complete los campos obligatorios.' };
  }

  // Configuración del transportador SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nombre}" <${process.env.SMTP_USER}>`, // El 'from' suele requerir que sea el mismo user autenticado
      replyTo: email,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      text: `
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #004b93;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${mensaje.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return { success: true, message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.' };
  } catch (error) {
    console.error('Error enviando email:', error);
    return { success: false, message: 'Hubo un error al enviar el mensaje. Por favor intente más tarde.' };
  }
}
