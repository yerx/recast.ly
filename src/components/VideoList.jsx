import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
    <div className="video-list">
      {props.videos.map(obj => <VideoListEntry video={obj} key={obj.etag} />)}
    </div>
 );


// class VideoList extends React.Component {
//   render() {
//     return (
//       <div className="video-list">
//         {this.props.videos.map(obj => <VideoListEntry video={obj} key={obj.etag} />)};
//       </div>
//     );
//   }
// }


VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.


export default VideoList;
