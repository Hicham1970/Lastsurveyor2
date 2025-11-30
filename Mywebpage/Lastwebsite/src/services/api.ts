import axios from 'axios';

export const sendContactMessage = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    // On utilise une URL relative pour appeler la fonction serverless de Vercel.
    // L'endpoint `/api/send-email` correspond au fichier `src/api/send-email.ts`.
    const response = await axios.post('/api/send-email', formData);
    return response.data;
  } catch (error) {
    // Propager l'erreur permet au composant qui appelle de la gérer.
    throw error;
  }
};