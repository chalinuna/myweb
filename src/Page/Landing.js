import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Page/Landing.scss";
import Github from "../assets/github.svg";
import Blog from "../assets/blog.svg";

function Landing() {
  return (
    <div className="animate__animated animate__flipInX page-top">
      <Container>
        <Row className="Row g-0">
          <Col xl={10}>
            <div
              onClick={() =>
                window.open("https://github.com/chalinuna", "_blank")
              }
              className="circle-3"
            >
              <span>Github</span>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://make-somthing.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
                  "_blank"
                )
              }
              className="circle-4"
            >
              <span>Blog</span>
            </div>
            <div className="intro">
              <div>안녕하세요,</div>
              <div>
                <span className="yellow-text">노력하는 </span>
                <span>개발자</span>
              </div>
              <div>CHALIE NUNA 입니다.</div>
            </div>
            <div className="skill-tree">
              React, SCSS, JQuery, Node.js, Express, MongoDB, MySQL, Figma,
              Photoshop
            </div>
            <div className="button-zone">
              <Button variant="dark">Github</Button>
              <span>
                <Button variant="dark">Blog</Button>
              </span>
            </div>
          </Col>
          <Col sm={2}>
            <div className="circles">
              <span
                onClick={() =>
                  window.open("https://github.com/chalinuna", "_blank")
                }
                className="first-circle"
              >
                <div className="github-circle">
                  <div className="circle-1">
                    <span className="github-tag">
                      <img src={Github} alt="github image" />
                      <span>Github</span>
                    </span>
                  </div>
                </div>
                <span
                  onClick={() =>
                    window.open(
                      "https://make-somthing.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
                      "_blank"
                    )
                  }
                  className="second-circle"
                >
                  <div className="github-circle2">
                    <div className="circle-2">
                      <span className="github-tag2">
                        <img src={Blog} alt="blog image" />
                        <span>Blog</span>
                      </span>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
