import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Page/Contact.scss";
import Edu from "../assets/edu.svg";
import Work from "../assets/work.svg";
import Certi from "../assets/certi.svg";
import { useNavigate } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();

  return (
    <div className="animate__animated animate__fadeIn contact-page page-top">
      <Row className="Row g-0">
        <div className="contact-tag tag">
          <span>Contact </span>
          <span>me</span>
        </div>
      </Row>
      <Row className="Row g-0">
        <Col sm={6} md={4} className="profile-col">
          <img
            src="https://source.unsplash.com/featured/?cat"
            className="profile-img"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/featured/?cat"
            className="mini-img"
            alt="mini profile"
          />
          <div>Jo Ain</div>
          <div>1998.11.17 (만 24세)</div>
          <div>Email : ainwithcat@gmail.com</div>
        </Col>
        <Col sm={6} className="resum-col" md={8}>
          <div className="resum-list">
            <img src={Edu} alt="education" />
            Education
          </div>
          <div className="edu">
            <span>대구대학교 컴퓨터공학과 4년제 졸업 ( 4.21 / 4.5 )</span>
            <span className="date">2017.03 ~ 2021.02</span>
          </div>
          <div className="resum-list">
            <img src={Work} alt="Professional Experience" />
            Professional Experience
          </div>
          <div className="elim">
            <span>엘림아동발달센터 Android 앱 개발</span>
            <span className="date">2021.10</span>
          </div>
          <div className="nano">
            <span>나노시스템즈 상세페이지 제작 및 웹 UI, 윈폼 UI 디자인</span>
            <span className="date">2022.03 ~ 2022.07.31</span>
          </div>
          <div className="resum-list">
            <img src={Certi} alt="Certificate" />
            Certificate
          </div>
          <div>
            <Row className="Row g-0">
              <Col sm={6} className="certificates">
                <div>
                  <span>컴퓨터활용능력 1급</span>
                  <span className="date">2021.05</span>
                </div>
                <div>
                  <span>정보처리기사</span>
                  <span className="date">2022.11</span>
                </div>
                <div>
                  <span>2종보통운전면허</span>
                  <span className="date">2017.01</span>
                </div>
              </Col>
              <Col sm={6} className="certificates">
                <div>
                  <span>Blog</span>
                  <span
                    onClick={() =>
                      window.open(
                        "https://make-somthing.tistory.com/68",
                        "_blank"
                      )
                    }
                    className="link"
                  >
                    LINK
                  </span>
                </div>
                <div>
                  <span>Github</span>
                  <span
                    onClick={() =>
                      window.open("https://github.com/chalinuna", "_blank")
                    }
                    className="link"
                  >
                    LINK
                  </span>
                </div>
                <div>
                  <span>Portfolio(Projects)</span>
                  <span onClick={() => navigate("/projects")} className="link">
                    LINK
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
