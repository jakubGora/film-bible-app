import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Rank from "./Components/Rank/Rank";

import "./app.css";
import Nav from "./Components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Rank />
    </div>
  );
}

export default App;
