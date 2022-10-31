import axios from 'axios';

export const sendContactEmail = async (name, email, message) => {
  const data = {
    name,
    email,
    message,
  };

  try {
    return await axios.post("/api/sendMessage", data);
  } catch (error) {
    return error;
  }
}