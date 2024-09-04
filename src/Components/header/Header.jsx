import styled from "./header.module.css";
import logo from "./../../assets/image/Blog-app-logo.png";
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <div className={styled.logoImg}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styled.logoTitle}>
            <h3>{props.blogTitle}</h3>
          </div>
        </div>
        <div className={styled.navbarContainer}>
          <div className={styled.navbar}>
            <Link to="/">Home</Link>
            <a href="#about">About Us</a>
          </div>
        </div>
        <div className={styled.switch}> switch</div>
      </div>
    </header>
  );
}

export default Header;
