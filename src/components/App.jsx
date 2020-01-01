
import Seach from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: null, // figure out default videos--initialize???
      videos: [],
      search: ''
    };

    this.changeVideo = this.changeVideo.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.APIcallback = this.APIcallback.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getVideos('SNL');
  }

  getVideos(query) {
    let options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    searchYouTube(options, this.APIcallback);
  }


  APIcallback(data) {
    this.setState({video: data.items[0], videos: data.items});
  }

  changeVideo(obj) {
    this.setState({video: obj});
  }

  updateSearch(str) {
    this.setState({search: str});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Seach search={this.state.search} updateSearch={this.updateSearch} handleSubmit={this.handleSubmit} handleAPI={this.APIcallback} />
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

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;