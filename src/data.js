// import axios from 'axios'

// const BaseURL = 'https://youtube-v31.p.rapidapi.com'

// const options = {
//   params: {
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.RapidAPIKey,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };


// // try {
// // 	const response = await axios.request(options);
// // 	console.log(response.data);
// // } catch (error) {
// // 	console.error(error);
// // }

// export const fetchFromAPI = async(url) => {
//     const {data} = await axios.get(`${BaseURL}/${url}`,options);
//     return data;
// }

import axios from 'axios';

// Base URL
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// API Options
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '4d2ed495a0msh411946b90bd19fcp1ac0d3jsn246d5aa31e61',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// fetch from API
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};