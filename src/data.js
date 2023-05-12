import axios from 'axios'

const urlBase = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '7acf0f5aecmshdeac84a248f00afp1f34dejsn6a06da7c5f07',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async(url) => {
    const res = await axios.get(`${urlBase}/${url}`,options);
}