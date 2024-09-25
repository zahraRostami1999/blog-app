import styled from "./createPost.module.css";
import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Input from "../../Components/input/Input";
import Textarea from "../../Components/textArea/Textarea";
import { useState } from "react";
import axios from "axios";
import create from "../../assets/image/create.jpg";

function CreatePost() {
  const [postData, setPostData] = useState({
    title: "",
    author: "",
    readingTime: "",
    cover: "",
    content: "",
  });

  const handleChangePost = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendNewPost = (e) => {
    axios.post("http://localhost:8000/PostAPI", {
      id: 5,
      badge: "Design",
      cover: postData.cover,
      title: postData.title,
      author: postData.author,
      content: postData.content,
      readingTime: postData.readingTime,
    });
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${create})`, backgroundSize: 'cover'}}>
        <Header blogName="Zahra Rostami(XanimQiz)'s Blog" />
        <div className={styled.createContainer}>
          <div className={styled.createPostWrapper}>
            <Input
              label="Title"
              name="title"
              type="text"
              handleChange={handleChangePost}
            />
            <Input
              label="Cover"
              name="cover"
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
            <Textarea label="Text" name="content" handleChange={handleChangePost} />
            <button onClick={sendNewPost}>Upload Post</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
