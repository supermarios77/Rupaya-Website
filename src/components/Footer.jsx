import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="footer-icons">
        <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>
      <ul className="footer-menu">
        <li><a href="/"> Privacy Policy </a></li>
        <li><a href="/terms"> Terms Of Service </a></li>
        <li><a href="/"> Disclaimer </a></li>
      </ul>
    </footer>
  );
}

export default Footer;
