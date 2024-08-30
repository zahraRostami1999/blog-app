import styled from "./header.module.css";

function Header() {
  return (
    <header>
        <div className={styled.logo}>Logo</div>
        <div className={styled.navbar}>Navbar</div>
        <div className={styled.switch}>Switch</div>
    </header>
  );
}

export default Header;
