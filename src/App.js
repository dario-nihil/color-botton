import { useState } from "react";
import "./App.css";

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
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="enable-button-checkbox"
        type="checkbox"
        onChange={checkboxClickHandler}
      />
    </div>
  );
}

export default App;
