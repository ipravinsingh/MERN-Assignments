import React from "react";

function Main(props) {
  const container = {
    backgroundColor: "#f7f780",
    margin: "20px",
    borderRadius: "8px",
  };
  return (
    <div style={container}>
      <p style={{ padding: "40px" }}>{props.para}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ padding: "40px" }}>{props.date}</p>
        <p style={{ padding: "40px" }}>{props.icon}</p>
      </div>
    </div>
  );
}

export default Main;
