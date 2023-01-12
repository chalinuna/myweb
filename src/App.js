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
  max-width: 1200px;
  background-color: beige;
  margin: auto;
`;

export default App;
