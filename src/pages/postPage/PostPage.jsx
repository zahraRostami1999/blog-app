import styled from "./postPage.module.css";
import Header from "../../Components/header/Header";
import { useParams } from "react-router-dom";


function PostPage() {
  const params = useParams();

  axios.get(`http://localhost:8000/PostAPI/${params.id}`).then((result) => {
    console.log(result);
  });

  return (
    <div>
      <div className={styled.header}>
        <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
      </div>
      <div className={styled.postContainer}>
        <div className={styled.postSection}>
          <h1>fcdvgxf</h1>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
