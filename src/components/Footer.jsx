import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="footer-icons">
        <li><a href="https://twitter.com/RupayaCoin"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li><a href="https://www.facebook.com/rupayacoin"><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li><a href="https://discord.com/invite/8tbvMQM"><ion-icon name="logo-discord"></ion-icon></a></li>
        <li><a href="https://www.reddit.com/r/RupayaCoin/"><ion-icon name="logo-reddit"></ion-icon></a></li>
      </ul>
      <ul className="footer-menu">
        <li><a href="/"> Privacy Policy </a></li>
        <li><a href="/terms"> Terms Of Service </a></li>
        <li><a href="/terms"> Disclaimer </a></li>
      </ul>
    </footer>
  );
}

export default Footer;
