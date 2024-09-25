import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Post_list from "../../Components/post_list/Post_list";
import background from '../../assets/image/postsList.jpg'

function PostsList() {
  return (
    <>
      <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        <Header
          blogName="Zahra Rostami(XanimQiz)'s Blog"
        />
        <Post_list />
      </div>
    </>
  );
}

export default PostsList;
