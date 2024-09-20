import styled from "./header.module.css";
import logo from "./../../assets/image/profile.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Header(props) {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.headerContainer}>
          <div className={styled.firstRow}>
            <div className={styled.headerName}>
              <h3>{props.blogName}</h3>
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
          <div className={styled.secundRow}>
            <div className={styled.blogTitleWrapper}>
            <h1>{props.blogTitle}</h1>
          </div>
          </div>
        </div>
      </div>
    </>
 
  );
}

export default Header;
