import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import { Fragment } from "react";
import styled from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styled.homeWrapper}>
        <Header blogTitle="Zahra Rostami(XanimQiz)'s Blog" />
        <h1>Hello My friend</h1>
        <Footer title="..." />
      </div>
    </>
  );
}

export default Home;
