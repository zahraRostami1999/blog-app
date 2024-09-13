import styled from "./postPage.module.css";
import Header from "../../Components/header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function PostPage() {
  const params = useParams();
  const [post, setpost] = useState({});

  axios.get(`http://localhost:8000/PostAPI/${params.id}`).then((result) => {
    setpost(result.data);
  });

  return (
    <div>
      <div className={styled.header}>
        <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
      </div>
      <div className={styled.postContainer}>
        <div className={styled.postSection}>
          <div className={styled.postTitle}>
            <h2>{post.title}</h2>
            <h5>{post.author}</h5>
            <h5>{post.readingTime}</h5>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PostPage;
