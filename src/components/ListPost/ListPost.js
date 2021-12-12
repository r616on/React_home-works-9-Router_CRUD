import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../Post/Post";
import "./desktop.scss";

function ListPost({ posts, updatePosts }) {
  useEffect(() => {
    updatePosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ListPost">
      <div className="ListPost-title">
        <Link to="/posts/new" className="btn creet-post">
          Создать пост
        </Link>
      </div>
      <div className="ListPost-row">
        {posts &&
          posts.map((item) => {
            return <Post key={item.id} id={item.id} body={item.content} />;
          })}
      </div>
    </div>
  );
}

export default ListPost;
