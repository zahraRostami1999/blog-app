import styled from "./header.module.css";
import logo from './Blog-app-logo.png';

function Header() {
  return (
    <header className={styled.header}>
        <div className={styled.container}>
            <div className={styled.logo}>
                <div className={styled.logoImg}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styled.logoTitle}><h3>Zahra Rostami</h3></div>
            </div>
            <div className={styled.navbar}>Navbar</div>
            <div className={styled.switch}>Switch</div>
        </div>

    </header>
  );
}

export default Header;
