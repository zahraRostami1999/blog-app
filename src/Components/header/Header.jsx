import styled from "./header.module.css";
import logo from './../../assets/image/Blog-app-logo.png';

function Header(props) {
  return (
    <header className={styled.header}>
        <div className={styled.container}>
            <div className={styled.logo}>
                <div className={styled.logoImg}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styled.logoTitle}><h2>{props.blogTitle}</h2></div>
            </div>
            <div className={styled.navbar}>Navbar</div>
            <div className={styled.switch}> switch
            </div>
        </div>

    </header>
  );
}

export default Header;
