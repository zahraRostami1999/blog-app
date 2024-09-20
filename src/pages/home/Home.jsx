import styled from "./home.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import cover from "../../assets/image/cover.jpg";

function Home() {
  return (
    <>
      <Header blogName="Zahra Rostami(XanimQiz)" blogTitle="THE BLOG" />
      <div className={styled.coverContainer}>
        <div className={styled.backgroundCover}>
          <h2>Hi there! I'm Zahra Rostami,</h2>
          <h3>
            a front-end developer passionate about crafting engaging and
            user-friendly web experiences. Currently, I'm diving deep into the
            world of React, exploring its powerful capabilities and learning new
            techniques to enhance my skills. Join me on this exciting journey as
            I share insights, projects, and resources related to front-end
            development, React, and anything else that sparks my interest. Feel
            free to reach out if you have any questions or want to connect!
          </h3>
        </div>
        <div className={styled.cover}>
          <img src={cover} alt="cover" />
        </div>
      </div>
    </>
  );
}

export default Home;
