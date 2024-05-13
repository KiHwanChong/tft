import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RIOT_API_URL,
});

instance.interceptors.request.use((config) => {
  const modifiedConfig = { ...config };
  modifiedConfig.headers['X-Riot-Token'] = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  return modifiedConfig;
});

export default instance;
