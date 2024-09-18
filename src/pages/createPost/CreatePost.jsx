import styled from "./createPost.module.css";
import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Input from "../../Components/input/Input";
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
      [e.target.name]: e.target.value }));
      console.log(createPost);
      
  };

  return (
    <>
      <div>
        <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
        <Input label="Title" name="title" handleChange={handleChangePost} />
        <Input label="Author" name="author" handleChange={handleChangePost} />
        <Input label="ReadingTime" name="readingTime" handleChange={handleChangePost} />
      </div>
    </>
  );
}

export default CreatePost;
