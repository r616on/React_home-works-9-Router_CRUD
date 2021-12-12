import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./desktop.scss";
import ava from "./ava.png";

const Post = (props) => {
  return (
    <Link to={`/posts/${props.id}`} className="Post-Link">
      <div className="Post" id={props.id}>
        <div className="Post__title">
          <img src={ava} className="title__ava" alt="ava" />
          <div className="title__text">
            <div className="name">Имя пользователя</div>
            <div className="status">Пользователь</div>
          </div>
        </div>
        <div className="Post__body">{props.body}</div>
        <div className="Post-footer">
          <div className="Post-footer__item like">
            <span className="material-icons">thumb_up_off_alt</span> Нравится
          </div>
          <div className="Post-footer__item  comment">
            <span className="material-icons">chat_bubble_outline</span>
            Комментировать
          </div>
        </div>
        {props.children}
      </div>
    </Link>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
