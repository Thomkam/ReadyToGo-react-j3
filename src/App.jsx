import { useState } from "react";
import "./App.css";

function App() {
  const [btnOn, setBtnOn] = useState(true);
  const [btnOn2, setBtnOn2] = useState(true);
  const [btnOn3, setBtnOn3] = useState(true);
  const [launch, setLaunch] = useState(false);

  return (
    <>
      <div className="container">
        <button
          style={{ backgroundColor: btnOn ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn(true);
          }}
        >
          ON
        </button>
        <button
          style={{ backgroundColor: !btnOn ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn(false);
          }}
        >
          OFF
        </button>

        <button
          style={{ backgroundColor: btnOn2 ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn2(true);
          }}
        >
          ON
        </button>
        <button
          style={{ backgroundColor: !btnOn2 ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn2(false);
          }}
        >
          OFF
        </button>

        <button
          style={{ backgroundColor: btnOn3 ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn3(true);
          }}
        >
          ON
        </button>
        <button
          style={{ backgroundColor: !btnOn3 ? "blueviolet" : "white" }}
          onClick={() => {
            setBtnOn3(false);
          }}
        >
          OFF
        </button>
      </div>

      <div>
        <button
          style={{
            backgroundColor: btnOn && btnOn2 && btnOn3 ? "green" : "red",
          }}
        >
          {btnOn && btnOn2 && btnOn3 ? "GO" : "No GO"}
        </button>
      </div>
    </>
  );
}

export default App;
