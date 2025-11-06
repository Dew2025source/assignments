

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="container">
      <h1>Hello, React!</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Button />);
