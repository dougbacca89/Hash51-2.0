const axios = require('axios');

const youTubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 2,
      embeddable: true,
      key: process.env.YOUTUBE_API_KEY,
    },
  });

const videoEvidenceSearch = (searchTerm) => youTubeApi
    .get('http://googleapis.com/youtube/v3/search', {
        params: {
            q: `${searchTerm} conspiracies`,
        },
    })
    .then((data) => data)
    .catch((err) => err);

module.exports = { videoEvidenceSearch };
