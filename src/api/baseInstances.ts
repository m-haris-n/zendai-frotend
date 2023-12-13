import axios from 'axios';

const envar = import.meta.env;

export const gpt_link = axios.create({
  baseURL: envar.VITE_EDENAI_URL,

  headers: {
    Authorization: 'Bearer ' + envar.VITE_EDENAI_API_KEY,
    'Content-Type': 'application/json',
  },
});
