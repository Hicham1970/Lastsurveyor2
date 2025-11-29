import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendContactMessage = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};