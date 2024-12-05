import axios from 'axios';

const BASE_URL_USER = 'http://localhost:8085/admin';

const apiUser = axios.create({
  baseURL: BASE_URL_USER,
  headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', // optional, for clarity
  },
});

export const postUser = async (endpoint, data) => {
  try {
    const response = await apiUser.post(endpoint, data); 
    return response.data;
  } catch (error) {
    console.error('Error during POST request (User API):', error);
    throw error;
  }
};
