import React from 'react';

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
    const rows = this.props.data.map( ( d,ndx) => {
      if( d.logo === null){
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
      } else {
        return (
          <div key={ndx} style={card}>
            <img style={img_style} src={d.logo} alt="no logo" />
            <div style={info_style} >
              <a href={d.url} >{d.display_name}</a>
              <span style={{...status_icon, color:"green"}} >&#x2713;</span>
              <div style={small_text}>{d.status}</div>
            </div>
          </div>
        );
      }
    });
    return (
      <div>
        {rows}
      </div>
    );
  };
}
