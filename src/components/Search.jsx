class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({search: e.target.value});
    this.props.handleSearch(e.target.value)
  }

  handleSubmitButton(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleInputChange} value={this.state.search} />
        <button className="btn hidden-sm-down" onClick={this.handleSubmitButton}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
