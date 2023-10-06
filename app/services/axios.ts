import axios from 'axios';
import lastFmkeys from './lastFmkeys';

export const axiosLastFmInstance = axios.create({
  baseURL: 'https://ws.audioscrobbler.com',
  params: {
    api_key: lastFmkeys.apiKey,
    format: 'json',
  },
});
