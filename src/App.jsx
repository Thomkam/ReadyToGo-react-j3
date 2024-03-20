import { useState } from "react";
import "./App.css";

function App() {
  const [btnOn, setBtnOn] = useState(true);

  return (
    <>
      <div className="container">
        <button
          style={{ backgroundColor: btnOn ? "green" : "blue" }}
          onClick={() => {
            setBtnOn(btnOn);
          }}
        >
          ON
        </button>
        <button
          style={{ backgroundColor: !btnOn ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn(!btnOn);
          }}
        >
          OFF
        </button>
      </div>

      <div>
        <button /* style = {{ btnOn === true ? "green" : "red"}} */>
          GO !
        </button>
      </div>
    </>
  );
}

export default App;
