import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import { Fragment } from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div>
        <Header blogTitle="Zahra Rostami(XanimQiz)'s Blog" />
        <h1>Hello My friend</h1>
        <Footer title="..." />
      </div>
    </>
  );
}

export default Home;
