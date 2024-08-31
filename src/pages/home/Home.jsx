import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import Post from "../../Components/post/Post";

function Home() {
  return (
    <div>
      <Header blogTitle="Zahra Rostami's Blog" />
      <Footer title="You're the reason i get out of bed in the morning... well, after snoozing a few times." />
      <Post />
    </div>
  );
}

export default Home;
