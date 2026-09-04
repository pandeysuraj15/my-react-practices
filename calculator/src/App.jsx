import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const clickedValue = e.target.value;

    if (clickedValue === "AC") {
      setValue("");
      return;
    }

    if (clickedValue === "DE") {
      setValue(value.slice(0, -1));
      return;
    }

    if (clickedValue === "=") {
      if (!value) return;

      const operators = ["+", "-", "*", "/"];
      const lastChar = value[value.length - 1];      

        if (operators.includes(lastChar)) {
          return;
        }      

      setValue(eval(value));
      return;
    }

    setValue(value + clickedValue);
  };

  return (
    <div className="container">
      <div className="calculator">
        <form onClick={handleClick}>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" />
            <input type="button" value="DE" />
            <input type="button" value="." />
            <input type="button" value="/" />
          </div>
          <div>
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" value="*" />
          </div>
          <div>
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" value="-" />
          </div>
          <div>
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" value="+" />
          </div>
          <div>
            <input type="button" value="00" />
            <input type="button" value="0" />
            <input type="button" value="=" className="equal" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
