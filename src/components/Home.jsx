import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Hero">
        <div className="Hero-text">
          <p> Discover A New Era</p>
          <h1>
            Embrace Financial Freedom. <br /> Unlocking New Possibilities!.
          </h1>
          <button className="Primary-Btn"> About Us </button>
          <button className="Secondary-Btn"> Roadmap </button>
        </div>
      </div>

      <div className="home-text">
        <p>
          At Rupaya, {" "}
          <a className="Highlighted-Text" href="https://bitcointalk.org/index.php?topic=521251.0">
            we embarked on a journey in 2014
          </a> {" "}
          with a mission to bring awareness of cryptocurrencies and financial
          freedom to the people of South Asia. <br /> 
          Over the years, our project has
          evolved, adapting to the ever-changing landscape of the crypto market.
        </p>
      </div>
    </div>
  );
}

export default Home;
