// Ce code est un EXEMPLE pour un backend.
// Il doit être placé dans un environnement serveur (ex: /api/send-email.ts sur Vercel/Next.js)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// La fonction qui gère la requête
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Initialisez Resend et lisez les variables d'environnement ici
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.TO_EMAIL;

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    if (!toEmail) {
        console.error("La variable d'environnement TO_EMAIL est manquante.");
        return res.status(500).json({ message: "Erreur de configuration du serveur." });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // IMPORTANT: Doit être un domaine vérifié ou onboarding@resend.dev
            to: [toEmail],
            subject: `Nouveau message de ${name}`,
            reply_to: email, // Correction: la propriété est bien reply_to
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
            return res.status(500).json({ message: "Échec de l'envoi de l'e-mail.", error });
        }

        return res.status(200).json({ message: 'E-mail envoyé avec succès !', data });
    } catch (exception) {
        console.error(exception);
        return res.status(500).json({ message: 'Une erreur inattendue est survenue.', error: exception });
    }
}
