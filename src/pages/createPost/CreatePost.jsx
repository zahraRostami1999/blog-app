import styled from "./createPost.module.css";
import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Input from "../../Components/input/Input";
import Textarea from "../../Components/textArea/Textarea";
import { useState } from "react";

function CreatePost() {
  const [createPost, setCreatePost] = useState({
    title: "",
    author: "",
    readingTime: "",
  });

  const handleChangePost = (e) => {
    setCreatePost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
        <div className={styled.createPostWrapper}>
          <Input
            label="Title"
            name="title"
            type="text"
            handleChange={handleChangePost}
          />
          <Input
            label="Author"
            name="author"
            type="text"
            handleChange={handleChangePost}
          />
          <Input
            label="ReadingTime"
            name="readingTime"
            type="text"
            handleChange={handleChangePost}
          />
          <Textarea label="Text" name="text" />
        </div>
      </div>
    </>
  );
}

export default CreatePost;
