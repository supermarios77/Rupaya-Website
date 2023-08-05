import React from "react";
import "../AnimatedBG.css";

function Technology() {
  return (
    <div className="Technology">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <h1> Our Technology</h1>

      <div className="Box">
        <h3>Overview of Blockchain Technology</h3>
        <p>
          Blockchain technology has revolutionized the world of finance,
          offering decentralized and transparent solutions. At Rupaya, we
          believe in the potential of blockchain to empower financial freedom
          globally.
        </p>
      </div>

      <div className="Box">
        <h3>Evolution of Rupaya's Blockchain</h3>
        <p>
          Rupaya's blockchain technology has undergone significant evolution
          since its inception in 2014. We started with a scrypt PoW blockchain,
          inspired by Litecoin, to introduce cryptocurrencies to South Asia.
          However, we encountered challenges with scalability and security.To
          address these issues, we made a strategic shift to a POS blockchain
          based on Blackcoin. This transition allowed us to improve network
          security and transaction processing. Our quest for advanced features
          led us to utilize the PIVX codebase, making notable progress during
          the 2018 bull run.As the crypto landscape evolved, we moved to the
          TomoChain-based Ethereum chain. This migration allowed us to leverage
          the benefits of Ethereum's robust ecosystem and utilize masternodes
          for enhanced network governance.
        </p>
      </div>

      <div className="Box">
        <h3>Advantages of Masternodes</h3>
        <p>
          Masternodes play a crucial role in ensuring the stability and security
          of our blockchain. They enable faster and more efficient transaction
          validation, making our network more scalable and reliable. Masternodes
          also actively participate in network governance, allowing token
          holders to have a say in decision-making processes.
        </p>
      </div>

      <div className="Box">
        <h3>Blockchain Security</h3>
        <p>
          At Rupaya, security is a top priority. We have implemented robust
          security measures to safeguard our users and transactions. Our team
          continuously monitors the network to identify and mitigate potential
          threats, ensuring a safe environment for users to transact and engage
          with our project.
        </p>
      </div>

      <div className="Box">
        <h3>Scalability and Transaction Speed</h3>
        <p>
          Scalability and transaction speed are essential aspects of any
          successful blockchain. Our current technology is designed to handle a
          growing number of users and transactions efficiently. With the support
          of masternodes, our blockchain can process transactions at high
          speeds, making it suitable for a global audience.
        </p>
      </div>

      <div className="Box">
        <h3>Future Technological Upgrades</h3>
        <p>
          As we strive to provide the best experience for our users, we are
          committed to continuous technological improvements. Our roadmap
          includes launching a new, optimized blockchain, which will replace the
          current ERC20 token contract on Binance Chain. This upgrade will
          unlock new possibilities and propel our mission to empower financial
          freedom worldwide.
        </p>
      </div>
    </div>
  );
}

export default Technology;
