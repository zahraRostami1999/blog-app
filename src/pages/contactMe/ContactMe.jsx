import styled from "./contactMe.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function ContactMe() {
  return (
    <>
      <Header
        blogName="Zahra Rostami (XanimQiz)' Blog"
        blogTitle="Contact Me"
      />
      <div className={styled.container}>
        <div className={styled.wrapper}></div>
      </div>
    </>
  );
}

export default ContactMe;
