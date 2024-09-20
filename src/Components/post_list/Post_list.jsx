import Post from "../post/Post";
import styled from "./list.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../spinner/Spinner";

function Post_list() {
  const [postContent, setpostContent] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://localhost:8000/PostAPI")
      .then((result) => {
        setpostContent(result.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setisLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styled.postList}>
          <div className={styled.list}>
            {postContent.map((result) => (
              <Link to={`/Post/${result.id}`}>
                <Post key={result.id} content={result} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post_list;
