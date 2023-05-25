import axios from 'axios'

const BaseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RapidAPIKey,
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