import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home/Jsx";


const App = () => (
  <div className="container">
      <Home/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
