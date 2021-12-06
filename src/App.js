import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Post from "./components/Post/Post";

// "https://react-home-works-router-crid.herokuapp.com/";

function App() {
  return (
    <Router>
      <div className="App">
        <Post />
      </div>
    </Router>
  );
}

export default App;
