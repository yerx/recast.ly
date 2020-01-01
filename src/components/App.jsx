
import Seach from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import exampleVideoData from '../data/exampleVideoData.js';
// import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: null,
      videos: []
    };

    this.changeVideo = this.changeVideo.bind(this);
    this.APIcallback = this.APIcallback.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search('SNL');
  }

  search(query) {
    let options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };
    this.props.searchYouTube(options, this.APIcallback);
  }

  APIcallback(data) {
    // data from spec is array of objects, data from API is object with items property which is an array of objects
    if (Array.isArray(data)) {
      this.setState({video: data[0], videos: data});
    } else {
      this.setState({video: data.items[0], videos: data.items});
    }
  }

  changeVideo(obj) {
    this.setState({video: obj});
  }

  render() {
    return(
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Seach handleAPI={this.APIcallback} handleSearch={this.search} />
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.video} />
            </div>
            <div className="col-md-5">
              <VideoList videos={this.state.videos} changeVideo={this.changeVideo} />
            </div>
          </div>
        </div>
      );
    }
  }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;