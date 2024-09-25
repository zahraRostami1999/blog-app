import styled from "./postPage.module.css";
import Header from "../../Components/header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import Spinner from "../../Components/spinner/Spinner";
import { Link } from "react-router-dom";


function PostPage() {
  const params = useParams();
  const [post, setpost] = useState({});
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:8000/PostAPI/${params.id}`)
      .then((result) => {
        setpost(result.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setisLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <Header blogTitle={post.title} />
      {isLoading ? (
        <Spinner />
      ) : (
          <div className={styled.postContainer}>
            <div className={styled.postSection}>
              <div className={styled.postImg}>
                <img src={post.cover} alt="postImg" />
              </div>
              <div className={styled.postTitle}>
                <h5>{post.author}</h5>
                <h5>{post.readingTime}</h5>
              </div>
              <div className={styled.postContent}>
                <p>{post.content}</p>
              </div>
              <div className={styled.backList}>
                <Link to="/Posts">See other Posts</Link>
              </div>
            </div>
          </div>
      )}
    </>
  );
}

export default PostPage;
