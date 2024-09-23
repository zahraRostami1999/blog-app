import styled from "./home.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import cover from "../../assets/image/cover.jpg";

function Home() {
  return (
    <>
      <Header blogName="Zahra Rostami(XanimQiz)' Blog" />
      <div className={styled.container}>
        <div className={styled.coverContainer}>
          <div className={styled.backgroundCover}>
            <h1>Welcome to My Blog!</h1>
            <h2>
              Hi, I’m Zahra Rostami, a passionate Frontend Developer
              specializing in creating modern and responsive web applications. I
              focus on training and working with the React programming language
              to build dynamic, user-friendly interfaces.
            </h2>
            <h3>
              If you have any questions or would like to connect, feel free to
              reach out through the Contact page. I’d love to hear from you!
            </h3>
          </div>
          <div className={styled.cover}>
            <img src={cover} alt="cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
