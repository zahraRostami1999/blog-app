import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import PostPage from "./pages/postPage/PostPage";
import PostsList from "./pages/postsList/PostsList";
import CreatePost from "./pages/createPost/CreatePost";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<PostsList />} />
        <Route path="/Create-Post" element={<CreatePost />}/>  
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Post/:id" element={<PostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
