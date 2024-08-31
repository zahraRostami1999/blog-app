import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post_list from "../../Components/post_list/Post_list";

function Home() {
  return (
    <div>
      <Header blogTitle="XanimQiz(JEYRAN)'s Blog" />
      <Post_list />
      <Footer title="You're the reason i get out of bed in the morning... well, after snoozing a few times." />
    </div>
  );
}

export default Home;
