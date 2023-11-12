import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default API;
