import React from "react";

const CircleSelector = (props) => (
  <>
    <div className="CircleSelector">
      <button onClick={() => props.handleChangeColor()}>CIRCLE One</button>
      <button onClick={() => props.handleChangeColor2()}>CIRCLE Two</button>
      <button onClick={() => props.handleChangeColor3()}>CIRCLE Three</button>
      <button onClick={() => props.handleChangeColor4()}>CIRCLE Four</button>
    </div>
  </>
);

export default CircleSelector;
