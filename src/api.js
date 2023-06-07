import axios from 'axios';

export const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID gXv_HQqcatYEBItAblK08Yh0oxP4QDEmmfdlGuCnEnQ',
  },
});
