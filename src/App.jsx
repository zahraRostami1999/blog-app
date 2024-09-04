import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Post" element={<PostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
