import axios from 'axios';

const baseURL = 'https://api.github.com/';

const axiosReqs = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
});

export default async function(config) {
  try {
    return await axiosReqs(config);
  } catch (error) {
    throw error;
  }
}
