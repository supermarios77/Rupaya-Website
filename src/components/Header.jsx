import React from "react";
// import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function Header() {
  return (
      <header>
      <h1>Rupaya</h1>
      <nav>
        <ul className="nav_links">
          <li><a href="/" className="Home-Link">Home</a></li>
          <li><a href="/About">About Us</a></li>
          <li><a href="/roadmap">Roadmap</a></li>
          <li><a href="/Partnerships">Partnerships</a></li>
          <li><a href="/Technology">Technology</a></li>
          <li><a href="/Community"> Community </a></li>
          </ul>
          </nav>
          <a className="cta" href="/contact"><button>Contact</button></a>
      </header>
  );
}

export default Header;
