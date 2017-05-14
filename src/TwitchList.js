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
    const rows = data.map( ( d,ndx) => {
      console.log( "row:", d);
      if( typeof d.error !== "undefined"){
        return "";
      }
      return (
        <div key={ndx} style={card}>
          {d.stream === null?
            <span style={spacer}></span>
          : <img style={img_style} src={d.stream===null?"":d.stream.logo} alt="no logo" />
          }
          {d.stream === null?d.display_name:d.stream.display_name}
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
