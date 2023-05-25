import axios from 'axios'

const BaseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7acf0f5aecmshdeac84a248f00afp1f34dejsn6a06da7c5f07',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BaseURL}/${url}`,options);
    return data;
}

// import axios from 'axios';

// // Base URL
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// // API Options
// const options = {
//   params: {
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': '7acf0f5aecmshdeac84a248f00afp1f34dejsn6a06da7c5f07',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// // fetch from API
// export const fetchFromAPI = async (url) => {
//   const {data} = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };