import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Zipcodeclock from "./pages/ZipCodeClock";
import Blog from "./pages/Blog";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/portfolio/zipcodeclock" element={<Zipcodeclock/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  )
}