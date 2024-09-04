import styled from "./postPage.module.css";
import Header from "../../Components/header/Header";

function PostPage() {
  return (
    <div>
      <div className={styled.header}>
        <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
      </div>
      <div className={styled.postContainer}>
        <div className={styled.postSection}>
        <h1>Post Page</h1>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
