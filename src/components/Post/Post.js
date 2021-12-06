import React from "react";
import PropTypes from "prop-types";
import "./desktop.scss";
import ava from "./ava.png";

const Post = (props) => {
  return (
    <div className="Post">
      <div className="Post__title">
        <img src={ava} className="title__ava" alt="ava" />
        <div className="title__text">
          <div className="name">Имя пользователя</div>
          <div className="status">Пользователь</div>
        </div>
      </div>
      <div className="Post__body">Какой то текст</div>
      <div className="Post-footer">
        <div className="Post-footer__item like">
          <span className="material-icons">thumb_up_off_alt</span> Нравится
        </div>
        <div className="Post-footer__item  comment">
          <span className="material-icons">chat_bubble_outline</span>
          Комментировать
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
