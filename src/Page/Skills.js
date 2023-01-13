import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Page/Skills.scss";

function Skills() {
  return (
    <div className="animate__animated animate__fadeIn page-top">
      <Row className="Row g-0">
        <div className="tag">
          <span>My </span>
          <span>Skills</span>
        </div>
        <div className="sentence-area">
          <div>안녕하세요, 저는 React 개발자 조아인 입니다.</div>
          <div>
            Js 풀스택 개발자를 지향하며, 디자이너, 백엔드, 기획자 등 다양한
          </div>
          <div>
            직군과 원활히 소통하며 협업하는 개발자가 되기 위해 노력하고
            있습니다.
          </div>
        </div>
      </Row>
      <Row className="Row g-0">
        <Col className="first-col" lg={4} md={4}>
          <div className="skills-subject">
            Frontent Skills
            <Diamond
              color={"#ae11f9"}
              top={"-10px"}
              left={"-41px"}
              width={"40px"}
              height={"40px"}
            />
            <Diamond
              color={"#FFC700"}
              top={"-10px"}
              left={"-51px"}
              width={"40px"}
              height={"40px"}
            />
          </div>
          <div className="skills-tag">Vanilla Web</div>
          <div className="skills-information">
            Html5, css3, Vanilla Javascript, JQuery
          </div>
          <div className="skills-tag">React</div>
          <div className="skills-information">
            AJAX, React-Router-dom, Redux-toolkit, React-query, axios,
            bootstrap, styled-component ...
          </div>
        </Col>
        <Col className="first-col" lg={4} md={4}>
          <div className="skills-subject">
            <Diamond
              color={"#ae11f9"}
              top={"-10px"}
              left={"-41px"}
              width={"40px"}
              height={"40px"}
            />
            <Diamond
              color={"#FFC700"}
              top={"-10px"}
              left={"-51px"}
              width={"40px"}
              height={"40px"}
            />
            Backend Skills
          </div>
          <div className="skills-tag">Node.js</div>
          <div className="skills-information">
            Express, route, JWT, bcrypt, multer, aws-sdk
          </div>
          <div className="skills-tag">Database</div>
          <div className="skills-information">MongoDB, Mongoose, My-Sql</div>
        </Col>
        <Col className="first-col" lg={4} md={4}>
          <div className="skills-subject">
            <Diamond
              color={"#ae11f9"}
              top={"-10px"}
              left={"-41px"}
              width={"40px"}
              height={"40px"}
            />
            <Diamond
              color={"#FFC700"}
              top={"-10px"}
              left={"-51px"}
              width={"40px"}
              height={"40px"}
            />
            Tools
          </div>
          <div className="skills-tag">Design</div>
          <div className="skills-information">
            Figma, Photoshop, ClipStudio, Webflow, Wix
          </div>
          <div className="skills-tag">Develop</div>
          <div className="skills-information" id="final">
            Netlify, AWS S3, AWS elastic beanstalk, Github
          </div>
        </Col>
      </Row>
    </div>
  );
}

const Diamond = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border: 1px solid ${(props) => props.color};
  margin: 3px 0 0 30px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);

  -webkit-transform-origin: 0 100%;
  -moz-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  -o-transform-origin: 0 100%;
  transform-origin: 0 100%;
  @media (max-width: 994px) {
    display: none;
  }
`;

export default Skills;
