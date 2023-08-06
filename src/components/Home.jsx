import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Hero">
        <div className="Hero-text">
          <p> Discover A New Era</p>
          <h1>
            Embrace Financial Freedom. <br /> Unlocking New Possibilities!
          </h1>
          <button className="Primary-Btn"> About Us </button>
          <button className="Secondary-Btn"> Roadmap </button>
        </div>
      </div>

      <div className="home-text">
        <p>
          At Rupaya,{" "}
          <a
            className="Highlighted-Text"
            href="https://bitcointalk.org/index.php?topic=521251.0"
          >
            we embarked on a journey in 2014
          </a>{" "}
          with a mission to bring awareness of cryptocurrencies and financial
          freedom to the people of South Asia. <br />
          Over the years, our project has evolved, adapting to the ever-changing
          landscape of the crypto market.
        </p>
      </div>

      <div className="row">
        <div className="text-box">
          <i class="fa-regular fa-clock"></i>
          <p>
            Our story began with a pioneering mission to introduce
            cryptocurrencies to South Asia. Since then, our community has grown,
            embracing the power of decentralised finance.
          </p>
        </div>
        <div className="text-box">
          <i class="fa-solid fa-road"></i>
          <p>
            Our journey has been marked by challenges, but with each obstacle,
            we have grown stronger, always committed to our mission
          </p>
        </div>
        <div className="text-box">
          <i class="fa-solid fa-crown"></i>
          <p>
            From humble beginnings as a scrypt PoW blockchain, we have embraced
            innovation to become an ERC20 token on Binance Chain, empowering
            global accessibility
          </p>
        </div>
        <div className="text-box">
          <i class="fa-solid fa-mountain"></i>
          <p>
            Looking ahead, we envision revitalizing our project by assembling a
            skilled team and forging strategic partnerships to unlock new
            possibilities.
          </p>
        </div>
        <div className="text-box">
          <i class="fa-solid fa-globe"></i>
          <p>
            While our roots are in South Asia, our vision now extends worldwide.
            We aim to foster financial inclusion across borders and cultures.
          </p>
        </div>
        <div className="text-box">
          <i class="fa-solid fa-thumbs-up"></i>
          <p>
            We invite you to join us as we explore the boundless potential of
            blockchain technology to create a more equitable and inclusive
            financial landscape for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
