import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div className="Container">
        <div className="row">
          <section className="col left">
            <div className="contactTitle">
              <h2>Contact Us</h2>
            </div>

            <div className="socialMedia">
              <a href="https://twitter.com/RupayaCoin">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.reddit.com/r/RupayaCoin/?rdt=45680">
                <i class="fa-brands fa-reddit"></i>
              </a>
              <a href="https://www.facebook.com/rupayacoin">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://discord.com/invite/8tbvMQM">
                <i class="fa-brands fa-discord"></i>
              </a>
            </div>
          </section>

          <div className="input-group fullWidth">
            <button>
              <a href="mailto:partnerships@rupaya.com" target="_new">
                {" "}
                Send Message{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
