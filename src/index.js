import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import CounterExamples from "./components/CounterExample";

function App() {
  return (
    <div>
      {/* <HelloWorld /> */}
      <CounterExamples />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
