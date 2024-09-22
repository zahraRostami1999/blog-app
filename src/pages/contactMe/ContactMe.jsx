import styled from "./contactMe.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  return (
    <>
      <Header
        blogName="Zahra Rostami (XanimQiz)' Blog"
        blogTitle="Contact Me"
      />
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.col_40}>
            <div className={styled.colContainer}>
              <div className={styled.titleInfo}>
                <h1>Contact Information</h1>
                <h3>Do you like say something?</h3>
              </div>
              <div className={styled.contactInfo}></div>
              <div className={styled.socialIcon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faTelegram} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className={styled.col_60}>
            <div className={styled.colContainer}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
