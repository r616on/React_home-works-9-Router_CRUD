import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import ListPost from "./components/ListPost/ListPost";
import ViewPost from "./components/ViewPost/ViewPost";

// "https://react-home-works-router-crid.herokuapp.com/";
const adres = "https://react-home-works-router-crid.herokuapp.com";
// const adres = "http://localhost";

const port = "";
const url = `${adres}:${port}/posts`;

function App() {
  const [posts, setPosts] = useState([]);

  const updatePosts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((post) => {
        setPosts(post);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Router>
      <div className="App">
        {/* <Post /> */}
        <Routes>
          <Route path="/posts/new" element={<NewPost url={url} />} />
          <Route
            path="/posts/:id"
            element={
              <ViewPost
                posts={posts}
                setPosts={setPosts}
                url={url}
                updatePosts={updatePosts}
              />
            }
          />
          <Route
            path="/"
            element={
              <ListPost
                posts={posts}
                setPosts={setPosts}
                url={url}
                updatePosts={updatePosts}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
