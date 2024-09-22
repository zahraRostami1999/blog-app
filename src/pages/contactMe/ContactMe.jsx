import styled from "./contactMe.module.css";
import Header from "../../Components/header/Header";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
          <div className={styled.col_60}>
            <div className={styled.colContainer}>
              <div className={styled.formContainer}>
                <div className={styled.formGroup}>
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>

                <div className={styled.formGroup}>
                  <label>Last Name</label>
                  <input type="text" value="Doe" />
                </div>

                <div className={styled.formGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>

                <div className={styled.formGroup}>
                  <label>Phone Number</label>
                  <div className={styled.phoneInput}>
                    <label> Phone Number</label>
                    <input type="text" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
