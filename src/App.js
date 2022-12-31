import { useState } from "react";
import "./App.css";

export const relpaceCamelWithSpaces = (colorName) => {
  // let newColorName = "";

  // if (colorName.trim().length === 0) {
  //   throw new Error("unable to retrieve color name...");
  // }

  // for (let idx = 0; idx < colorName.length; idx++) {
  //   if (idx === 0) {
  //     newColorName += colorName[idx];
  //     continue;
  //   }

  //   if (colorName.charCodeAt(idx) >= 65 && colorName.charCodeAt(idx) <= 90) {
  //     const tempVar = " " + colorName[idx];
  //     newColorName += tempVar;
  //   } else {
  //     newColorName += colorName[idx];
  //   }
  // }

  // return newColorName;
  return colorName.replace(/\B([A-Z])\B/g, ` $1`);
};

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const checkboxClickHandler = (event) => {
    setDisabled(event.target.checked);
  };

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={checkboxClickHandler}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
