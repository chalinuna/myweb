import "./App.css";
import Landing from "./Page/Landing";
import { Route, Routes } from "react-router-dom";
import Navmenu from "./Components/Navmenu";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
