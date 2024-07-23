import Titles from "../utility/Titles";
import message from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import flag2 from "../assets/white-arrow.png";
import axios from "axios";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Contact = () => {
  const [fullData, setFullData] = useState({
    Fullname: "",
    PhoneNumber: "",
    Email: "",
    Details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFullData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/create", fullData);

      if (res.status === 200) {
        setFullData({
          Fullname: "",
          PhoneNumber: "",
          Email: "",
          Details: "",
        });
      } else {
        console.log("Error: ", res.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const leftSide = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-100px)",
    config: { duration: 300 },
  });

  const rightSide = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(100px)",
    config: { duration: 300 },
    delay: 300,
  });
  return (
    <div className="Contact" name="contact">
      <Titles supTitle="contact us" title="Get in Touch" />
      <div className="container-contact">
        <animated.div className="col" ref={ref} style={leftSide}>
          <div className="header">
            <p>Send us a message</p>
            <img src={message} alt="" />
          </div>
          <p className="desc">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul className="social-media">
            <li>
              <img className="icons" src={mail} alt="" />
              <span>Contact@GreatStack.dev</span>
            </li>
            <li>
              <img className="icons" src={phone} alt="" />
              <span>+1 123-456-7890</span>
            </li>
            <li>
              <img className="icons" src={location} alt="" />
              <span>
                77 Massachusetts Ave, Cambridge
                <br />
                MA 02139, United States
              </span>
            </li>
          </ul>
        </animated.div>
        <animated.div className="col" ref={ref} style={rightSide}>
          <form
            className="form"
            action="/create"
            method="POST"
            onSubmit={handleForm}
          >
            <ul>
              <li>
                <label>Your name</label>
              </li>
              <input
                name="Fullname"
                type="text"
                placeholder="Enter your name"
                value={fullData.Fullname}
                onChange={handleInputChange}
              />
            </ul>
            <ul>
              <li>
                <label>Phone Number</label>
              </li>
              <input
                className="hide-arrow"
                type="number"
                name="PhoneNumber"
                value={fullData.PhoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
            </ul>
            <ul>
              <li>
                <label>Your Email</label>
              </li>
              <input
                name="Email"
                type="email"
                placeholder="Enter your Email"
                value={fullData.Email}
                onChange={handleInputChange}
              />
            </ul>
            <ul>
              <li>
                <label>Write your messages here</label>
              </li>
              <textarea
                name="Details"
                rows={6}
                placeholder="write your message"
                value={fullData.Details}
                onChange={handleInputChange}
              ></textarea>
            </ul>
            <button type="submit" className="btn-flag">
              Submit now
              <img className="flag" src={flag2} alt="" />
            </button>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default Contact;
