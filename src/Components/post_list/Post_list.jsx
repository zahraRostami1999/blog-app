import Post from '../post/Post';
import styled from './list.module.css'

function Post_list() {
  return (
    <div className="container">
      <div className={styled.postList}>
        <div><h2>Post lists</h2></div>
        <div className={styled.list}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> 
            </div>
      </div>
    </div>
  );
}

export default Post_list;
