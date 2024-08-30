import styled from "./header.module.css";
import logo from './Blog-app-logo.png';

function Header() {

    const blogTitle = "Zahra Rostami's Blog";

  return (
    <header className={styled.header}>
        <div className={styled.container}>
            <div className={styled.logo}>
                <div className={styled.logoImg}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styled.logoTitle}><h2>{blogTitle}</h2></div>
            </div>
            <div className={styled.navbar}>Navbar</div>
            <div className={styled.switch}>Switch</div>
        </div>

    </header>
  );
}

export default Header;
