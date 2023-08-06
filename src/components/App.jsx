import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Roadmap from "./Roadmap";
import Contact from "./Contact";
import Partnerships from "./Partnerships";
import Technology from "./Technology";
import Community from "./Community";
import Terms from "./Terms";



function App() {
    return (
        <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Partnerships" element={<Partnerships />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/terms" element={<Terms />} />
        </Routes> 
        <Footer />
        </div>
    );
}

export default App;