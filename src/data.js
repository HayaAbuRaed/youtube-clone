import axios from 'axios';

// Base URL
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// API Options
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '246a971513mshaff37d9e298a536p13b953jsn4c7edb9b53d0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// fetch from API
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};