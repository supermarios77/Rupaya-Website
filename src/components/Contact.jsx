import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div className="Container">
        <div className="row">
          <section className="col left">
            <div className="contactTitle">
              <h2>Contact Us</h2>
              <p>
                Please Fill In These Fields.
              </p>
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

          <section className="col right">
            <form className="messageForm">
              <div className="input-group half-width">
                <input type="text" name="" required="required" />
                <label> Your Name </label>
              </div>

              <div className="input-group half-width">
                <input type="email" name="" required="required" />
                <label> Your Email </label>
              </div>

              <div className="input-group fullWidth">
                <input type="text" name="" required="required" />
                <label> Subject </label>
              </div>

              <div className="input-group fullWidth">
                <textarea required="required"></textarea>
                <label> Your Message </label>
              </div>

              <div className="input-group fullWidth">
                <button>Send Message</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
