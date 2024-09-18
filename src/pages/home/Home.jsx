import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post_list from "../../Components/post_list/Post_list";
import { Fragment } from "react";

function Home() {
  return (
    <>
      <Header blogTitle="Zahra Rostami(XanimQiz)'s Blog" />
      <Post_list />
      <Footer title="..." />
    </>
  );
}

export default Home;
