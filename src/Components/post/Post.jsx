import styled from "./post.module.css";
import cover1 from "./../../assets/image/post1.png";

function Post() {
  return (
    <div className={styled.postWrapper}>
      <div className={styled.postId}></div>
      <div className={styled.postImg}>
        <img src={cover1} alt="cover" />
      </div>
      <div className={styled.postTitle}>Post</div>
      <div className={styled.postAuthor}></div>
      <div className={styled.postContent}></div>
      <div className={styled.postTime}></div>
    </div>
  );
}

export default Post;
