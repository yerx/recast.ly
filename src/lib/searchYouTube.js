import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (input, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}`,
    type: 'GET',
    data: { 'q': input, 'maxResults': 5, "videoEmbeddable": "true"},
    success: callback,
    error: function(error) {
      console.error('FAILED', error);
    }

  })
};

export default searchYouTube;
