import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchValue: ""
  };
  handleSearchChange = (e) => {
    this.setState( {searchValue: e.target.value});
    this.props.handleSearchChange( e.target.value);
  };
  render = () => {
    const search_icon = {
      position: "absolute",
      top: ".5em",
      left: ".5em"
    };
    const search_field = {
      lineHeight: "2em",
      margin: "5px",
      outline: "none",
      paddingLeft: "24px",
      border: "none"
    };
    const wrapper = {
      position: "relative"
    };
    return (
      <div style={wrapper}>
        <span style={search_icon}>&#x1F50D;</span>
        <input type='text' style={search_field}
          value={this.state.searchValue} onChange={this.handleSearchChange} />
      </div>
    );
  };
}
