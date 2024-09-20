import { Fragment } from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post_list from "../../Components/post_list/Post_list";

function PostsList() {
  return (
    <>
      <Header blogName="Zahra Rostami (XanimQiz)' Blog" blogTitle="Posts List" />
      <Post_list />
      <Footer title="..." />
    </>
  );
}

export default PostsList;
