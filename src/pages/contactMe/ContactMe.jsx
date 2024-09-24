import styled from "./contactMe.module.css";
import Header from "../../Components/header/Header";
import Input from "../../Components/input/Input";
import TextArea from "../../Components/textArea/Textarea";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import background from "../../assets/image/contactPage.jpg";

function ContactMe() {
  return (
    <>
      <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '99.8vh'} }>
        <Header blogName="Zahra Rostami (XanimQiz)' Blog" />
        <div className={styled.container}>
          <div className={styled.wrapper}>
              <div className={styled.colContainer}>
                <div className={styled.titleInfo}>
                  <h2>Contact Information</h2>
                  <h3>Do you like say something?</h3>
                </div>
                <div className={styled.contactInfo}>
                  <div className={styled.phone}>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>0123456789</p>
                  </div>
                  <div className={styled.mail}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>demo@gmail.com</p>
                  </div>
                  <div className={styled.location}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>Massachusetts 02156 United States</p>
                  </div>
                </div>
                <div className={styled.socialIcon}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  <FontAwesomeIcon icon={faTelegram} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
