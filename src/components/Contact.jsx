import Titles from "../utility/Titles";
import message from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import flag2 from "../assets/white-arrow.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import useSetForm from "../hook/useSetForm";
import useValidation from "../hook/useValidation";
import ErrorMessage from "../utility/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const Contact = () => {
  const [fullData, setFullData] = useState({
    Fullname: "",
    PhoneNumber: "",
    Email: "",
    Details: "",
  });

  // useState o indicate if error comes from button or hint
  // so if from button it will be on red else on yellow
  const [fromBtn, setFromBtn] = useState(false);

  // custom hook for handle and setForm
  const { setForm, error, isPending } = useSetForm();

  // custom hook to check if input entered match some regex or net and return array (validationResult) for the one dosent match
  const { validationResult, checkValidation } = useValidation();

  const handleInputChange = (e) => {
    if (validationResult.length > 0) {
      setFromBtn(false);
    }
    const { name, value } = e.target;

    // check validation for the input each letter
    checkValidation(name, value);
    setFullData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    // reset the border color for inputs to be all false for each click
    // resetRedBorder(redBorder);
    try {
      if (validationResult.length > 0) {
        // // check for validationResult if it contain any field to set the border red
        // for (let i = 0; i < validationResult.length; i++) {
        //   setRedBorder((prev) => ({ ...prev, [validationResult[i]]: true }));
        // }

        // setBtn True so that's mean if there is any data in validationResult and the user click the hint on yellow will tranform to red
        setFromBtn(true);
        return;
      }

      // else that's mean everything is correct so set FromBtn to false
      const response = await setForm(fullData);
      setFromBtn(false);
      if (response.status === 200) {
        // Empty the inputs data
        setFullData({
          Fullname: "",
          PhoneNumber: "",
          Email: "",
          Details: "",
        });
        toast.success("Form submitted successfully!", { duration: 1000 });
      } else {
        toast.error("Form submission failed!", { duration: 1000 });
      }
    } catch (err) {
      toast.error("An error occurred!");
    }
  };

  // when the component in view on screen so it will motion the frames
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
                <label>Full name</label>
              </li>
              <input
                style={{
                  border:
                    validationResult.includes("Fullname") && fromBtn
                      ? "2px solid red"
                      : validationResult.includes("Fullname")
                      ? "2px solid #f4d462 "
                      : fullData["Fullname"].length > 0
                      ? "2px solid #28a745"
                      : null,
                }}
                name="Fullname"
                maxLength={30}
                type="text"
                placeholder="Enter your name"
                value={fullData.Fullname}
                onChange={handleInputChange}
                required
              />
              {validationResult.includes("Fullname") && fromBtn ? (
                <ErrorMessage fromBtn={true} name="Fullname" />
              ) : validationResult.includes("Fullname") ? (
                <ErrorMessage fromBtn={false} name="Fullname" />
              ) : null}
            </ul>
            <ul>
              <li>
                <label>Phone Number</label>
              </li>
              <input
                style={{
                  border:
                    validationResult.includes("PhoneNumber") && fromBtn
                      ? "2px solid red"
                      : validationResult.includes("PhoneNumber")
                      ? "2px solid #f4d462 "
                      : fullData["PhoneNumber"].length > 0
                      ? "2px solid #28a745"
                      : null,
                }}
                className="hide-arrow"
                type="number"
                name="PhoneNumber"
                value={fullData.PhoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              {/* this is for the error message below each sinputs
              so if it's not valid and comes fromBTn it will be red else yellow else null */}
              {validationResult.includes("PhoneNumber") && fromBtn ? (
                <ErrorMessage fromBtn={true} name="PhoneNumber" />
              ) : validationResult.includes("PhoneNumber") ? (
                <ErrorMessage fromBtn={false} name="PhoneNumber" />
              ) : null}
            </ul>
            <ul>
              <li>
                <label>Your Email</label>
              </li>
              <input
                style={{
                  border:
                    validationResult.includes("Email") && fromBtn
                      ? "2px solid red"
                      : validationResult.includes("Email")
                      ? "2px solid #f4d462 "
                      : fullData["Email"].length > 0
                      ? "2px solid #28a745"
                      : null,
                }}
                maxLength={40}
                name="Email"
                type="email"
                placeholder="Enter your Email"
                value={fullData.Email}
                onChange={handleInputChange}
                required
              />
              {validationResult.includes("Email") && fromBtn ? (
                <ErrorMessage fromBtn={true} name="Email" />
              ) : validationResult.includes("Email") ? (
                <ErrorMessage fromBtn={false} name="Email" />
              ) : null}
            </ul>
            <ul>
              <li>
                <label>Write your messages here</label>
              </li>
              <textarea
                style={{
                  border:
                    validationResult.includes("Details") && fromBtn
                      ? "2px solid red"
                      : validationResult.includes("Details")
                      ? "2px solid #f4d462 "
                      : fullData["Details"].length > 0
                      ? "2px solid #28a745"
                      : null,
                }}
                name="Details"
                rows={6}
                maxLength={200}
                placeholder="write your message"
                value={fullData.Details}
                onChange={handleInputChange}
                required
              ></textarea>
              {validationResult.includes("Details") && fromBtn ? (
                <ErrorMessage fromBtn={true} name="Details" />
              ) : validationResult.includes("Details") ? (
                <ErrorMessage fromBtn={false} name="Details" />
              ) : null}
            </ul>
            <button type="submit" className="btn-flag">
              Submit now
              <img className="flag" src={flag2} alt="" />
            </button>
          </form>
        </animated.div>
      </div>
      <ToastContainer />
      {isPending && (
        <div className="loading-spinner">
          <Oval height={40} width={40} color="grey" />
        </div>
      )}
    </div>
  );
};

export default Contact;
