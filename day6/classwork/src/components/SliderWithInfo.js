import React from "react";
import Slider from "@mui/material/Slider";

const SliderWithInfo = ({ min, max, value, symbol, title, onChange }) => {
  const valuetext = (value) => {
    return `${value} ${symbol}`;
  };

  return (
    <div style={{ width: "90%", padding: "1%", boxShadow: "1px 1px 1px grey", margin: "1%" }}>
      <div><p>{title}</p></div>
      <div style={{ margin: "-9px 0px -20px 0px" }}>
        <h4>
          {symbol} {value}
        </h4>
      </div>
      <div>
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-20px" }}>
        <div>
          <p>
            {symbol}
            {min}
          </p>
        </div>
        <div>
          <p>
            {symbol}
            {max}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderWithInfo;
