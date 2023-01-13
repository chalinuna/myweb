import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Page/Skills.scss";

function Skills() {
  return (
    <div className="page-top">
      <Row>
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
      <Row>
        <Col>
          <div className="skills-subject">
            <div id="purple-diamond"></div>
            <div id="yellow-diamond"></div>
            Frontent Skills
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
        <Col>
          <div className="skills-subject">
            <div id="purple-diamond"></div>
            <div id="yellow-diamond"></div>
            Backend Skills
          </div>
          <div className="skills-tag">Node.js</div>
          <div className="skills-information">
            Express, route, JWT, bcrypt, multer, aws-sdk
          </div>
          <div className="skills-tag">Database</div>
          <div className="skills-information">MongoDB, Mongoose, My-Sql</div>
        </Col>
        <Col>
          <div className="skills-subject">
            <div id="purple-diamond"></div>
            <div id="yellow-diamond"></div>
            Tools
          </div>
          <div className="skills-tag">Design</div>
          <div className="skills-information">
            Figma, Photoshop, ClipStudio, Webflow, Wix
          </div>
          <div className="skills-tag">Develop</div>
          <div className="skills-information">
            Netlify, AWS S3, AWS elastic beanstalk, Github
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
