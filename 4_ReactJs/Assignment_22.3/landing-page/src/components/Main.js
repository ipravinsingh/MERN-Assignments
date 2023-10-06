import React from "react";

function Main(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <i>{props.icon}</i>
        <h4>{props.headingFour}</h4>
        <p>{props.para}</p>
        <button style={{ padding: "5px" }}>Learn more →</button>
      </div>
    </div>
  );
}

export default Main;
