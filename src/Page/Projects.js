import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Page/Projects.scss";
import TemplateImg from "../assets/img/templateGif.gif";
import MovieImg from "../assets/img/movie.png";
import PortImg from "../assets/img/port.png";
import ShortGif from "../assets/img/shortGif.gif";
import FullstackGif from "../assets/img/fullstack.gif";

const Img = [ShortGif, TemplateImg, FullstackGif, MovieImg, PortImg];
const about = [
  {
    subject: "Short Blog(Todo)",
    content: "React와 localStorage를 이용한 SNS 형식 미니 블로그.",
    skills:
      "Redux Toolkit, useSelector, useNavigator, useState, useDispatch, useEffect, localStorage, Route, URL Prams, sessionStorage",
    github: "https://github.com/chalinuna/shortBlog",
    blog: "https://make-somthing.tistory.com/6",
  },
  {
    subject: "Slide-Template",
    content: "슬라이드 형태 리액트 SPA 템플릿 ",
    skills: "useNavigator, styled-components, bootstrap, useEffect",
    github: "https://github.com/chalinuna/slide-template",
    blog: "https://make-somthing.tistory.com/76",
  },
  {
    subject: "Boiler-Template",
    content:
      "React + Node.js Express + MongoDB 풀스택 회원가입, 로그인, 로그아웃, 회원정보 수정, 글작성 보일러 플레이트",
    skills:
      "Redux, React-quill, Router, Exrpess, multer, JWT, MongoDB, Mongoose, 등... react-quill",
    github: "https://github.com/chalinuna/Boiler",
    blog: "https://make-somthing.tistory.com/27",
  },
  {
    subject: "Movie api app",
    content: "Open Movie api를 사용한 영화 순위 목록 웹 어플리케이션",
    skills: "React, Node.js(Express 프레임워크), MongoDB",
    github: "https://github.com/chalinuna/movie-app",
    blog: "https://make-somthing.tistory.com/5",
  },
  {
    subject: "Portfolio",
    content: "나의 포트폴리오를 정리한 SPA React 프로젝트",
    skills: "React - styled.components, SCSS, react-router-dom@6, bootstrap",
    github: "https://github.com/chalinuna/myweb",
    blog: "https://make-somthing.tistory.com/77",
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
  return (
    <Modal>
      <Row>
        <Col xl={6}>
          <div className="about-area">
            <img className="img-area" src={Img[props.num]} alt="preview" />
          </div>
        </Col>
        <Col xl={6}>
          <div className="about-area">
            <div className="prj-subject">{about[props.num].subject}</div>
            <div className="prj-link">
              <span
                onClick={() =>
                  window.open(`${about[props.num].github}`, "_blank")
                }
              >
                Github
              </span>
              <span
                onClick={() =>
                  window.open(`${about[props.num].blog}`, "_blank")
                }
              >
                Blog
              </span>
            </div>
            <div className="prj-skills">
              사용 기술 : {about[props.num].skills}
            </div>
            <div className="prj-content">{about[props.num].content}</div>
          </div>
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

  @media (max-width: 1200px) {
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-left: 25%;
    padding-right: 12%;
  }
  @media (max-width: 450px) {
    padding-left: 14%;
  }
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
    text-align: center;
  }

  @media (max-width: 773px) {
    span {
      opacity: 100%;
      color: white;
      font-size: 20px;
      position: absolute;
      top: 45%;
      left: 22%;
      text-align: center;
    }
  }

  @media (max-width: 281px) {
    span {
      opacity: 100%;
      color: white;
      font-size: 20px;
      position: absolute;
      top: 45%;
      left: 10%;
      text-align: center;
    }
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
