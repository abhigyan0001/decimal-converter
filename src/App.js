import "./App.css";
import { useState } from "react";

function App() {
  const box = {
    borderColor: "black",
    borderWidth: "1px",
    borderStyle: "solid",
    marginTop: "12px",
    paddingBottom: "10px",
    marginRight: "73em",
    marginLeft: "1em",
    paddingLeft: "1em",
    paddingRight: "1em"
  }

  const [decimal, setdecimal] = useState(0);

  function handleState() {
    setdecimal(Number.parseInt(prompt("Enter the decimal number:")));
  }
  
  return (
    <>
      <div style={box}>
        <h3>Decimal: {decimal}</h3>
        <button onClick={handleState}>Change decimal</button>
      </div>
      <div style={box}>
        <ul>
          <li>Binary: {decimal.toString(2)}</li>
          <li>Octal: {decimal.toString(8)}</li>
          <li>Hexa: {decimal.toString(16)}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
