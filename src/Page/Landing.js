import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
function Landing() {
  return (
    <Container>
      <Row className="Row g-0">
        <Col md={10}>
          <div>안녕하세요,</div>
          <div>노력하는 개발자</div>
          <div>CHALIE NUNA 입니다.</div>
          <div>
            React, SCSS, JQuery, Node.js, Express, MongoDB, MySQL, Figma,
            Photoshop
          </div>
        </Col>
        <Col sm={2}>
          <Circle />
        </Col>
      </Row>
    </Container>
  );
}

const Circle = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 120px;
  height: 120px;
`;

export default Landing;
