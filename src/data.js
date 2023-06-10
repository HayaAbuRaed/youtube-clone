import axios from 'axios';

// Base URL
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// API Options
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '8c3d83674emshf4e99928b6b8926p1b8bd1jsn58f158d1249c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// fetch from API
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};