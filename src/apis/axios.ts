import axios from 'axios';

export const api = axios.create({
  baseURL: `https://books-api.nomadcoders.workers.dev`
})