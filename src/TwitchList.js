import React from 'react';
import data from './data.json';

export default class TwitchList extends React.Component {
  render = () => {
    const card = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative"
    };
    const img_style = {
      outline: "0",
      maxHeight: "64px",
      margin: "0px 10px"
    };
    const spacer = {
      width: "64px",
      height: "64px",
      margin: "0px 10px"
    };
    const info_style = {
      display: "flex",
      flexDirection: "column",
      marginRight: "20px"
    };
    const small_text = {
      fontSize: "0.7em"
    }
    const status_icon = {
      position: "absolute",
      top: "1em",
      right: ".5em",
      fontWeight: "bold"
    };
    const rows = data.map( ( d,ndx) => {
      if( typeof d.error !== "undefined"){
        return "";
      }
      const re = new RegExp( this.props.searchText, "i");
      if( d.stream === null){
        if( this.props.searchText !== "" && d.display_name.search( re) === -1){
          return "";
        }
        return (
          <div key={ndx} style={card}>
            <span style={spacer}></span>
            <div style={info_style}>
              {d.display_name}
              <span style={{...status_icon, color:"red"}} >!</span>
              <div style={small_text}></div>
            </div>
          </div>
        );
      }
      if( this.props.searchText !== "" && d.stream.display_name.search( re) === -1){
        return "";
      }
      return (
        <div key={ndx} style={card}>
          <img style={img_style} src={d.stream===null?"":d.stream.logo} alt="no logo" />
          <div style={info_style} >
            <a href={d.stream.url} >{d.stream.display_name}</a>
            <span style={{...status_icon, color:"green"}} >&#x2713;</span>
            <div style={small_text}>{d.stream.status}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {rows}
      </div>
    );
  };
}
