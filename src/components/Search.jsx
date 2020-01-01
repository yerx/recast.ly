import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import APIcallback from './App.js';


function Search(props) {
  function handleSearch(e) {
    props.updateSearch(e.target.value);

    let options = {
      key: YOUTUBE_API_KEY,
      query: e.target.value,
      max: 5
    };
    searchYouTube(options, props.handleAPI);// callback = setState for videos
  }


  function handleSubmitButton(e) {
    props.handleSubmit(e);
  }

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handleSearch} value={props.search} />
      <button className="btn hidden-sm-down" onClick={handleSubmitButton}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
