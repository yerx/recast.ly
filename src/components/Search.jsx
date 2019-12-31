import searchYouTube from '../lib/searchYouTube.js';


function Search(props) {
  function handleSearch(e) {
    console.log(e);
    props.updateSearch(e.target.value);
    searchYouTube(e.target.value, );
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
