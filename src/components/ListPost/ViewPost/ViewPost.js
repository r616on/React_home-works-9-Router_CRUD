import React from "react";
import Post from "../../Post/Post";
import { useMatch } from "react-router-dom";

function ViewPost({ url }) {
  //   const match = useMatch();
  //   console.log(match);
  return (
    <div className="ViewPost">
      <Post />
    </div>
  );
}

export default ViewPost;
