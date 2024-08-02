
import "./Contact.css";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="contact contact-container" id="contact">
      <div className="contact-header" data-aos="zoom-in">
        <h1 className="contact-header-below">CONTACT</h1>
        <p className="contact-header-top">Get In Touch</p>
      </div>

      <div className="contact-desc" data-aos="fade-down">
      <p >
        Let's get connected today.
      </p>
      </div>

      <div className="contact-details" data-aos="fade-left">
        <div className="contact-details-left">
          <div className="contact-item">
          <CiLocationOn />
            <div className="contact-specific-det">
              <p>Location:</p>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div className="contact-item" >
            <div className="contact-item">
            <TfiEmail />
              <div className="contact-specific-det">
                <p>Email:</p>
                <span>agnesswendi@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="contact-item">
          <FiPhone />

            <div className="contact-specific-det">
              <p>Phone:</p>
              <span>+254 745 605040</span>
            </div>
          </div>
        </div>

        <div className="contact-details-right" data-aos="fade-right">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Type message here"></textarea>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
