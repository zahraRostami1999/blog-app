import Post from "../post/Post";
import styled from "./list.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Post_list() {
  const [postContent, setpostContent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/PostAPI")
      .then((result) => {
        setpostContent(result.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <div className="container">
      <div className={styled.postList}>
        <div>
          <h2>Post lists</h2>
        </div>
        <div className={styled.list}>
          {postContent.map((result) => (
            <Link to={`/Post/${result.id}`}>
              <Post key={result.id} content={result} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post_list;
