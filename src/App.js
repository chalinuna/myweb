import "./App.css";
import Landing from "./Page/Landing";
import { Route, Routes } from "react-router-dom";
import Navmenu from "./Components/Navmenu";
import Footer from "./Components/Footer";
import Skills from "./Page/Skills";
import Projects from "./Page/Projects";
import Contact from "./Page/Contact";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Background>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Background>
      <Footer />
    </div>
  );
}

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 140px);
  max-width: 1300px;
  margin: auto;
  display: table;

  @media (max-width: 413px) {
    height: calc(100vh - 100px);
  }
`;

export default App;
