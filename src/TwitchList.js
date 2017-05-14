import React from 'react';
import data from './data.json';

export default class TwitchList extends React.Component {
  render = () => {
    const card = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    };
    const img_style = {
      outline: "0",
      maxHeight: "64px",
      marginRight: "10px"
    };
    const spacer = {
      width: "64px",
      height: "64px",
      marginRight: "10px"
    };
    const info_style = {
      display: "flex",
      flexDirection: "column"
    };
    const small_text = {
      fontSize: "0.7em"
    }
    const rows = data.map( ( d,ndx) => {
      console.log( "row:", d);
      if( typeof d.error !== "undefined"){
        return "";
      }
      if( d.stream === null){
        return (
          <div key={ndx} style={card}>
            <span style={spacer}></span>
            {d.display_name}
          </div>
        );
      }
      return (
        <div key={ndx} style={card}>
          <img style={img_style} src={d.stream===null?"":d.stream.logo} alt="no logo" />
          <div style={info_style} >
            <a href={d.stream.url} >{d.stream.display_name}</a>
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
