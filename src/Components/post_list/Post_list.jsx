import Post from "../post/Post";
import styled from "./list.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Post_list() {
  const [postContent, setpostContent] = useState([]);

  useEffect(() => {
    // http://localhost:8000/PostAPI
    // setpostContent()
  }, []);

  return (
    <div className="container">
      <div className={styled.postList}>
        <div>
          <h2>Post lists</h2>
        </div>
        <div className={styled.list}>
          {postContent.map((result) => (
            <Post content={result} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post_list;
