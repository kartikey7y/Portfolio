import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Introduction/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
