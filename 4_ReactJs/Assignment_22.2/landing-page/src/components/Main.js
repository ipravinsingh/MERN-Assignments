import React from "react";

function Main(props) {
  const container = {
    padding: "15px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "4%",
  };
  const headingFour = {
    marginBlock: "8px",
  };

  return (
    <div style={container}>
      <img style={imageStyle} src={props.image} alt={props.altName} />
      <h4 style={headingFour}>{props.heading}</h4>
      <p>{props.para}</p>
    </div>
  );
}

export default Main;
