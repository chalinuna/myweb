import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "../Components/Navmenu.scss";
import MenuSvg from "../assets/menu.svg";
import Xbutton from "../assets/xButton.svg";
import { useNavigate } from "react-router-dom";

function Navmenu() {
  let navigate = useNavigate();

  return (
    <div className="top">
      <NavHeader>
        <Row className="Row g-0">
          <Col
            onClick={() => {
              navigate("/");
            }}
            xs={2}
          >
            CHALIE NUNA
          </Col>
          <Col xs={2}></Col>
          <Col xs={2}></Col>
          <Col
            onClick={() => {
              navigate("/skills");
            }}
            xs={2}
          >
            My-Skills
          </Col>
          <Col
            onClick={() => {
              navigate("/projects");
            }}
            xs={2}
          >
            My-Projects
          </Col>
          <Col
            onClick={() => {
              navigate("/contact");
            }}
            xs={2}
          >
            Contact-me
          </Col>
        </Row>
      </NavHeader>
      <MiniMenu />
    </div>
  );
}

function MiniMenu() {
  const [clicked, setClick] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      {clicked ? <ToggleMenu /> : ""}
      <MiniHeader>
        <Row className="Row g-0">
          <Col className="logo">CHALI NUNA</Col>
          <Col onClick={() => setClick(!clicked)}>
            <img src={MenuSvg} alt="menu button" />
          </Col>
        </Row>
      </MiniHeader>
    </>
  );

  function ToggleMenu() {
    const [Xclicked, setXClick] = useState(false);
    return (
      <Toogle
        Xclicked={Xclicked}
        onClick={() => {
          setXClick(!Xclicked);
          setClick(!clicked);
        }}
      >
        <img src={Xbutton} alt="Close button" />
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            CHALIE NUNA
          </li>
          <li
            onClick={() => {
              navigate("/skills");
            }}
          >
            My-Skills
          </li>
          <li
            onClick={() => {
              navigate("/projects");
            }}
          >
            My-Projects
          </li>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact-me
          </li>
        </ul>
      </Toogle>
    );
  }
}

const Toogle = styled.div`
  position: fixed;
  right: 0px;
  top: 0;
  width: fit-content;
  height: 100vh;
  background-color: white;
  z-index: 1;
  text-align: right;
  padding-right: 2rem;
  padding-top: 2rem;
  border-left: 1px solid lightgray;

  @keyframes showMenu {
    0% {
      transform: translateX(100%); /* ?????????????????? 0%?????? ????????? */
    }
    100% {
      transform: translateX(0%); /* ?????????????????? 100%?????? ????????? */
    }
  }
  animation-name: showMenu;
  animation-duration: 0.5s;

  ul {
    margin-top: 2rem;

    li {
      margin-top: 1rem;
      list-style: none;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 870px) {
    display: none;
  }
  display: ${(props) => (props.Xclicked ? "none" : "block")};
`;

const hoverColor = "#ff9900";
const NavHeader = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 90px;
  background-color: #323030;
  color: white;
  margin: auto;
  text-align: center;
  display: grid;
  align-items: flex-end;
  @media screen and (max-width: 870px) {
    display: none;
  }
  .col-2:hover {
    color: ${hoverColor};
  }
`;

const MiniHeader = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #323030;
  color: white;
  margin: auto;
  text-align: center;
  display: grid;
  align-items: flex-end;
  @media screen and (min-width: 870px) {
    display: none;
  }
  @media (max-width: 413px) {
    height: 50px;
  }
  img {
    margin-left: 60%;
    @media (max-width: 376px) {
      margin-left: 60%;
    }
  }
  .logo {
    margin: auto;
    margin-right: 20%;
    @media (max-width: 376px) {
      font-size: 1rem;
    }
  }
`;

export default Navmenu;
