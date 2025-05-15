import React, { useState } from "react";
import rgbColors from "./DummyData/rgbColors";
import hexColors from "./DummyData/hexColors";
import randomColors from "./DummyData/randomColors";

function RandomColor() {
  const [colorType, setColorType] = useState("HEX Color");
  const [colorCode, setColorCode] = useState("rgb(210, 105, 30)");
  const [color, setColor] = useState("chocolate");

  const generateRGBColor = () => {
    const randomColor = Math.floor(Math.random() * rgbColors.length);
    setColor(rgbColors[randomColor].rgb);
    setColorCode(rgbColors[randomColor].rgb);
  };

  const generateHEXColor = () => {
    const randomColor = Math.floor(Math.random() * hexColors.length);
    setColor(hexColors[randomColor].hex);
    setColorCode(hexColors[randomColor].hex);
  };

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * randomColors.length);
    const colorId = randomColors[randomColor].id;
    if(colorId >= 20){
        setColorType("RGB Color");
        generateRGBColor();
    }else{
        setColorType("HEX Color");
        generateHEXColor();
    }
  };

  return (
    <div className="color" style={{ backgroundColor: color }}>
      <div className="btn">
        <div>
        <button
          onClick={() => {
            setColorType("HEX Color");
            generateHEXColor();
          }}
        >
          HEX Color
        </button>
        <button
          onClick={() => {
            setColorType("RGB Color");
            generateRGBColor();
          }}
        >
          RGB Color
        </button>
        </div>
        <button onClick={generateRandomColor} id="generate-btn">Generate Random Color</button>

      </div>
      <div
        style={{ fontSize: "20px", fontWeight: "bolder", color: "CaptionText" }}
      >
        {colorType}
      </div>
      <div
        style={{ fontSize: "20px", fontWeight: "bolder", color: "CaptionText" }}
      >
        {colorCode}
      </div>
    </div>
  );
}

export default RandomColor;
