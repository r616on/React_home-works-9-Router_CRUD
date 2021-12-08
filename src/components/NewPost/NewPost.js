import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./desktop.scss";
import { v4 as uuidv4 } from "uuid";

const initForm = { textarea: "" };

function NewPost({ url }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(initForm);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: 0,
        content: form.textarea,
      }),
    })
      .then((resp) => {
        if (resp.status === 204) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setForm(initForm);
  };
  return (
    <div className="NewPost">
      <div className="NewPost-Title">
        <span className="NewPost-Title-item">
          <span className="material-icons">create</span>Публикации
        </span>
        <span className="NewPost-Title-item">
          <span className="material-icons">photo_camera</span>Фотографии
        </span>
        <span className="NewPost-Title-item">
          <span className="material-icons">videocam</span>Прямой эфир
        </span>
        <span className="NewPost-Title-item">
          <span className="material-icons">more_horiz</span>Еще
        </span>
        <span className="NewPost-Title-item">
          <Link className="material-icons close" to="/">
            close
          </Link>
        </span>
      </div>
      <form className="NewPost-form" onSubmit={handleSubmit}>
        <textarea
          id="new"
          name="textarea"
          className={"textarea"}
          value={form.textarea}
          onChange={handleChange}
        />
        <input
          className="material-icons send"
          value="send"
          type="submit"
          value="Опубликовать"
        />
      </form>
    </div>
  );
}

export default NewPost;
