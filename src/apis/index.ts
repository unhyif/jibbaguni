import axios from 'axios';

const API = axios.create({
  baseURL: process.NEXT_PUBLIC_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default API;
