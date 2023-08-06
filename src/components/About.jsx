import React from "react";
import "../AnimatedBG.css";

function About() {
  return (
    <div className="about-section">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="Container">
        <div className="title">
          <h1> About Us</h1>
        </div>
        <div className="Content">
          <div className="article">
            <h3> Our Vision: Empowering Financial Freedom </h3>
            <p>
              {" "}
              At Rupaya, our journey began in 2014 with a vision to
              revolutionize financial systems in South Asia. We aimed to bring
              awareness of cryptocurrencies to the region, offering individuals
              newfound financial freedom and opportunities for economic growth.{" "}
            </p>
          </div>
          <div className="article">
            <h3> Evolution and Adaptation </h3>
            <p>
              Our project's history is a testament to our adaptability and
              perseverance. We started as a scrypt PoW blockchain, inspired by
              Litecoin, to establish our presence in the crypto landscape.
              However, challenges arose when miners exploited the network,
              prompting a shift to a POS blockchain code based on
              Blackcoin.Despite limitations, we persisted in our mission. To
              leverage more advanced features, we subsequently forked PIVX and
              utilized its codebase, making significant strides during the 2018
              bull run. However, the crypto winter that followed resulted in a
              massive sell-off and exposed exploits in the PIVX
              codebase.Undeterred, we commissioned the development of a fork of
              PIVX 4.0.0 in 2019. Unfortunately, this version was also plagued
              by exploits. We continued our quest for technical stability and in
              2019, we made a significant move to fork TomoChain. This
              transition allowed us to operate on an Ethereum-based chain
              powered by masternodes.
            </p>
          </div>
          <div className="article">
            <h3>Proud Achievements and Setbacks</h3>
            <p>
              Our journey has been marked by proud{" "}
              <a
                href="https://www.coindesk.com/markets/2018/09/02/the-fight-over-masternodes-the-wtf-new-way-to-earn-money-with-crypto/"
                className="Highlighted-Text"
              >
                achievements
              </a>{" "}
              as well as{"  "}
              <a
                href="https://medium.com/@dsl_uiuc/fake-stake-attacks-on-chain-based-proof-of-stake-cryptocurrencies-b8b05723f806"
                className="Highlighted-Text"
              >
                setbacks.
              </a>{" "}
              At the peak of our success, we gained recognition and support from
              a growing community. However, we encountered challenges when some
              team members exploited the code and impacted the market
              negatively.
            </p>
          </div>
          <div className="article">
            <h3> Empowering a Global Audience </h3>
            <p>
              {" "}
              While our roots lie in South Asia, we now aspire to empower
              financial freedom globally. We aim to transcend geographical
              boundaries and cultural differences to foster financial inclusion
              worldwide.{" "}
            </p>
          </div>
          <div className="article">
            <h3>Join Our Journey</h3>
            <p>
              Rupaya's future roadmap entails revitalizing our project through
              strategic partnerships and innovations. We are committed to
              building a dedicated and trustworthy team to carry forward our
              vision. Together, we will explore the potential of blockchain
              technology to create a better and more inclusive financial world
              for everyone.
            </p>
          </div>
          <div className="Article-End">
            <h3 className="Founder"> Meet The Founder</h3>
            <h5>
              {" "}
              Aasim <br /> Founder, Rupaya
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
