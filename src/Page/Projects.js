import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Page/Projects.scss";
import ShortImg from "../assets/img/shortblog.png";
import TemplateImg from "../assets/img/template.png";
import MovieImg from "../assets/img/movie.png";
import PortImg from "../assets/img/port.png";

const Img = [ShortImg, TemplateImg, MovieImg, PortImg];
const about = [
  {
    subject: "Short Blog(Todo)",
    content: "내용하나",
    github: "깃헙링크하나",
    blog: "블로그링크하나",
  },
  {
    subject: "Slide-Template",
    content: "내용2",
    github: "깃헙링크2",
    blog: "블로그링크2",
  },
  {
    subject: "Movie api app",
    content: "내용3",
    github: "깃헙링크3",
    blog: "블로그링크3",
  },
  {
    subject: "Portfolio",
    content: "내용4",
    github: "깃헙링크4",
    blog: "블로그링크4",
  },
];

function Projects() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState("");
  function showModal() {
    setShow(!show);
  }

  return (
    <div className="page-top">
      <div className="slide">
        <Row>
          {Img.map(function (contentArray, i) {
            return (
              <Col
                onClick={() => {
                  showModal();
                  setNum(i);
                }}
                key={i}
                md={6}
              >
                {show ? <AboutProject num={num} /> : ""}
                <PrjBox Img={Img[i]}>
                  <span>{about[i].subject}</span>
                </PrjBox>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

function AboutProject(props) {
  console.log(props.num);
  return (
    <Modal>
      <Row>
        <Col md={6}>
          <div className="about-area">
            <img className="img-area" src={Img[props.num]} />
          </div>
        </Col>
        <Col md={6}>
          <div className="about-area"></div>
        </Col>
      </Row>
    </Modal>
  );
}

const Modal = styled.div`
  display: flex;
  margin: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const PrjBox = styled.div`
  position: relative;
  background-color: #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url(${(props) => (props.Img ? props.Img : "")});
  background-repeat: round;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  background-color: black;
  margin-bottom: 1rem;
  cursor: pointer;

  span {
    opacity: 100%;
    color: white;
    font-size: 30px;
    position: absolute;
    top: 40%;
    left: 34%;
  }

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url(${(props) => (props.Img ? props.Img : "")});
    span {
      display: none;
    }
  }
`;

export default Projects;
