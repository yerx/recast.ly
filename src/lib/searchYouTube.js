var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?`,
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: "true",
      part: 'snippet',
      type: 'video',
      key: options.key
    },
    success: callback,
    error: function(error) {
      console.error('FAILED', error);
    }

  })
};

export default searchYouTube;
