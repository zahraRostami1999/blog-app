import styled from "./header.module.css";
import logo from "./../../assets/image/profile.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <div className={styled.logoContainer}>
          <div className={styled.logoImg}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styled.logoTitle}>
            <h4>{props.blogName}</h4>
            <div className={styled.blogTitleWrapper}>
              <h1>{styled.blogTitle}</h1>
            </div>
          </div>
        </div>

        <div className={styled.navbarContainer}>
          <div className={styled.navbar}>
            <Link to="/">Home</Link>
            <Link to="/Posts">Posts</Link>
            <Link to="/Create-Post">Create Post</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
