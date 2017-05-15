import React from 'react';
import TwitchList from './TwitchList';
import SearchBar from './SearchBar';
import './App.css';
import fake_data from './data.json';

class App extends React.Component {
  state = {
    show_status : "all",
    search_text : ""
  };
  handleAll = () => {
    this.setState( { show_status: "all"});
  };
  handleOffline = () => {
    this.setState( { show_status: "offline"});
  };
  handleOnline = () => {
    this.setState( { show_status: "online"});
  };
  handleSearchChange = ( search_text) => {
    this.setState( { search_text: search_text});
  };
  render = () => {
    const buttonBar = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "red",
      border: "2px solid rgba( 64,64,192,0.2)",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      backgroundImage: "linear-gradient( 0deg, rgba( 64,64,192,0.5), rgba( 64,64,192,0.3))"
    };
    const container = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flex: "0 1 400px"
    };
    const list_wrapper = {
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      backgroundColor: "white"
    };
    const data = fake_data.filter( ( d) => {
      // stream should be valid for live, or null, otherwise error
      if( typeof d.stream === "undefined"){
        return false;
      }
      return true;
    }).filter( (d) => {
      // filter online/offline/all
      let ret = false;
      switch( this.state.show_status){
        case 'offline':
          if( typeof d.stream === "undefined" || d.stream === null){
            ret = true;
          } else if( d.stream && typeof d.stream.status === "undefined"){
            ret = true;
          }
          break;
        case 'online':
          ret = ( d.stream && d.stream.status)
          break;
        case 'all':
        default:
          ret = true;
          break;
      }
      return ret;
    }).filter( (d) => {
      // filter search text
      if( this.state.search_text === ""){
        return true;
      }
      let dn = "";
      const re = new RegExp( this.state.search_text, "i");
      if( d.stream === null){
        dn = d.display_name;
      } else {
        dn = d.stream.display_name;
      }
      return dn.search( re) > -1;
    }).map( (d) => {
      // grab the bits we want to display
      let ret = {
        logo : null,
        display_name : "",
        url : "",
        status: ""
      };
      if( d.stream === null){
        ret.display_name = d.display_name;
      } else {
        ret.logo = d.stream.logo;
        ret.display_name = d.stream.display_name;
        ret.url = d.stream.url;
        ret.status = d.stream.status;
      }
      return ret;
    });
    return (
      <div style={container}>
        <div>
          <div style={buttonBar}>
            <button type="button"
              className={this.state.show_status==="all"?"button-active":""}
              onClick={this.handleAll}>All</button>
            <button type="button"
              className={this.state.show_status==="offline"?"button-active":""}
              onClick={this.handleOffline}>Offline</button>
            <button type="button"
              className={this.state.show_status==="online"?"button-active":""}
              onClick={this.handleOnline}>Online</button>
          </div>
          <div style={list_wrapper}>
            <SearchBar handleSearchChange={this.handleSearchChange}/>
            <TwitchList data={data} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
