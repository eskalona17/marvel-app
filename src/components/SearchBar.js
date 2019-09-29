import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchText: this.props.querySearch.name || '',
    error: true,
    touch: false
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
      error: (e.target.value.length <= 3)
    }, () => this.props.onSearch(this.state.searchText))
  }

  handleBlur = (e) => {
    this.setState({ touch: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchText } = this.state;
    this.props.onSearch(searchText)
  }

  componentDidMount() {
    const { searchText } = this.state;
    if (searchText) {
      this.props.onSearch(searchText)
    }
  }

  render() {
    return (
      <div className="SearchBar row mb-4 mt-4 d-flex justify-content-center h-100">
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/* <label>Search</label> */}
              <input type="text" className="form-control"
                name="searchText"
                autoComplete="off"
                value={this.state.searchText}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              {this.state.touch && this.state.error && (
                <div>
                  Invalid field
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" disabled={this.state.error}>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
