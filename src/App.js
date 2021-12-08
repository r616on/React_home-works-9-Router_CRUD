import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post/Post";
import NewPost from "./components/NewPost/NewPost";
import ListPost from "./components/ListPost/ListPost";
import ViewPost from "./components/ListPost/ViewPost/ViewPost";

// "https://react-home-works-router-crid.herokuapp.com/";
// const adres = "https://react-home-works-router-crid.herokuapp.com";
const adres = "http://localhost";

const port = 7777;
const url = `${adres}:${port}/posts`;

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Post /> */}
        <Routes>
          <Route path="/posts/new" element={<NewPost url={url} />} />
          <Route path="/posts/:id" element={<ViewPost url={url} />} />
          <Route path="/" element={<ListPost url={url} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
