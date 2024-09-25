import styled from "./post.module.css";

function Post(props) {
  return (
    <div className={styled.postWrapper}>
      <div className={styled.postImg}>
        
        <img src={props.content.cover} alt="cover" />
      </div>
      <div className={styled.postBadge}>{props.content.badge}</div>
      <div className={styled.postTitle}>{props.content.title}</div>
      <div className={styled.postFooter}>
        <div className={styled.postAuthor}>{props.content.author}</div>
        <div className={styled.postTime}>{props.content.readingTime}</div>
      </div>
    </div>
  );
}

export default Post;
