import React from 'react';
import TwitchList from './TwitchList';
import SearchBar from './SearchBar';
import './App.css';

class App extends React.Component {
  state = {
    show_status : "all"
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
      width: "100%",
      backgroundColor: "white"
    };
    return (
      <div style={container}>
        <div className="App">
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
            <SearchBar />
            <TwitchList  />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
