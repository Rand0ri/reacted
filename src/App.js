import React from "react";
import "./App.scss";

function App() {
  const sayHello = () => {
    console.log("hello");
  };

  return (
    <div>
      <h1 className="hello">Hello React</h1>
      <button onClick={sayHello}>Helo</button>
    </div>
  );
}

export default App;
