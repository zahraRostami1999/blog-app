import styled from "./home.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import cover from "../../assets/image/cover.jpg";
import background from "../../assets/image/homePage.jpg";

function Home() {
  return (
    <>
      <Header blogName="Zahra Rostami(XanimQiz)' Blog" />
      <div className={styled.backgroundCover}>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "92vh",
          }}
        >
          <div className={styled.introContainer}>
            <div className={styled.intro}>
              <h1>Welcome to My Blog!</h1>
              <h2>
                Hi, I’m Zahra Rostami, a passionate Frontend Developer
                specializing in creating modern and responsive web applications.
                I focus on training and working with the React programming
                language to build dynamic, user-friendly interfaces.
              </h2>
              <h3>
                If you have any questions or would like to connect, feel free to
                reach out through the Contact page. I’d love to hear from you!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
