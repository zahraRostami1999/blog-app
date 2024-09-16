import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post_list from "../../Components/post_list/Post_list";
import { Fragment } from "react";

function Home() {
  return (
    <>
      <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
      <Post_list />
      <Footer title="You're the reason I get out of bed in the morning... well, after snoozing a few times." />
    </>
  );
}

export default Home;
