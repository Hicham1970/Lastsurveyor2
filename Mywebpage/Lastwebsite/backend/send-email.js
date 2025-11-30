import { Resend } from 'resend';

// Récupérez la clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'h.garoum@gmail.com'; // Votre adresse e-mail Gmail

export const sendEmail = async ({ name, email, phone, message }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // IMPORTANT: Doit être un domaine vérifié ou onboarding@resend.dev
            to: [toEmail], // Votre adresse e-mail
            subject: `New Message from ${name}`,
            reply_to: email, // Pour pouvoir répondre directement au visiteur
            html: `
        <h1>New message from your website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error({ error });
            throw new Error('Failed to send email.');
        }

        return { success: true, data };
    } catch (exception) {
        console.error(exception);
        throw new Error('An unexpected error occurred.');
    }
};
