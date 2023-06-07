import axios from 'axios'

const BaseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RapidAPIKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
module.exports = {
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BaseURL}/${url}`,options);
    return data;
}