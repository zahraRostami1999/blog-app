import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import PostPage from "./pages/postPage/PostPage";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<PostsList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Post/:id" element={<PostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
