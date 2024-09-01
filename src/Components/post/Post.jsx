import styled from "./post.module.css";
import cover1 from "./../../assets/image/post1.png";

function Post(props) {
  return (
    <div className={styled.postWrapper}>
      <div className={styled.postId}>{props.content.id}</div>
      <div className={styled.postImg}>{props.content.cover}
        <img src={cover1} alt="cover" />
      </div>
      <div className={styled.postTitle}>{props.content.title}</div>
      <div className={styled.postAuthor}>Bob Johnson</div>
      <div className={styled.postContent}>This is the first post in our API</div>
      <div className={styled.postTime}>5 minutes</div>
    </div>
  );
}

export default Post;
