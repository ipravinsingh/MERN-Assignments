import React from "react";

function Heading() {
  const container = {
    display: "flex",
  };
  const btnFirst = {
    padding: "8px",
    margin: "10px",
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
  };
  const btnSecond = {
    padding: "8px",
    margin: "10px",
    borderRadius: "10px",
    border: "1px solid white",
  };
  return (
    <div style={container}>
      <button style={btnFirst}>Recently uploaded</button>
      <button style={btnSecond}>Popular</button>
    </div>
  );
}

export default Heading;
