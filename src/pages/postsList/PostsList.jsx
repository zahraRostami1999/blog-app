import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post_list from "../../Components/post_list/Post_list";
import background from '../../assets/image/postsList.jpg'

function PostsList() {
  return (
    <>
      <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        <Header
          blogName="Zahra Rostami (XanimQiz)' Blog"
        />
        <Post_list />
        <Footer title="..." />
      </div>
    </>
  );
}

export default PostsList;
