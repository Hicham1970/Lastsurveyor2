// Ce code est un EXEMPLE pour un backend.
// Il doit être placé dans un environnement serveur (ex: /api/send-email.ts sur Vercel/Next.js)

import { Resend } from 'resend';

// Récupérez la clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY as string);
const toEmail = process.env.TO_EMAIL as string;

// La fonction qui gère la requête
export default async function handler(req: any, res:any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // IMPORTANT: Doit être un domaine vérifié ou onboarding@resend.dev
            to: [toEmail], // Votre adresse e-mail
            subject: `New Message from ${name}`,
            replyTo: email, // Pour pouvoir répondre directement au visiteur
            html: `
        <h1>New message from your website MarineInspect Pro</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error({ error });
            return res.status(500).json({ message: 'Failed to send email.', error });
        }

        return res.status(200).json({ message: 'Email sent successfully!', data });
    } catch (exception) {
        console.error(exception);
        return res.status(500).json({ message: 'An unexpected error occurred.', error: exception });
    }
}
