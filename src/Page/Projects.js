import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Page/Projects.scss";
import ShortImg from "../assets/img/shortblog.png";
import TemplateImg from "../assets/img/template.png";
import MovieImg from "../assets/img/movie.png";
import PortImg from "../assets/img/port.png";

function Projects() {
  const about = [
    {
      subject: "하나제목",
      content: "내용하나",
      github: "깃헙링크하나",
      blog: "블로그링크하나",
    },
    {
      subject: "2제목",
      content: "내용2",
      github: "깃헙링크2",
      blog: "블로그링크2",
    },
    {
      subject: "3제목",
      content: "내용3",
      github: "깃헙링크3",
      blog: "블로그링크3",
    },
    {
      subject: "4제목",
      content: "내용4",
      github: "깃헙링크4",
      blog: "블로그링크4",
    },
  ];

  return (
    <div className="page-top">
      <div className="slide">
        <Row>
          <Col md={6}>
            <PrjBox Img={ShortImg}>
              <span>Short Blog (Todo)</span>
            </PrjBox>
          </Col>
          <Col md={6}>
            <PrjBox Img={TemplateImg}>
              <span>Slide-template</span>
            </PrjBox>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <PrjBox Img={MovieImg}>
              <span>Movie-app</span>
            </PrjBox>
          </Col>
          <Col md={6}>
            <PrjBox Img={PortImg}>
              <span>Portfolio Page</span>
            </PrjBox>
          </Col>
        </Row>
      </div>
    </div>
  );
}

function AboutProject() {
  return (
    <div>
      <div>프로젝트에 대하여 ~ </div>
    </div>
  );
}

const PrjBox = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
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
    left: 33%;
  }

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url(${(props) => (props.Img ? props.Img : "")});
    span {
      color: black;
      background-color: white;
    }
  }
`;

export default Projects;
