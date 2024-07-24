import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const ErrorMessage = ({ name, fromBtn }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    switch (name) {
      case "Fullname":
        setMessage(
          'Full name should contain at least two words, with each word consisting of letters only. Example: "John Doe".'
        );
        break;
      case "PhoneNumber":
        setMessage(
          'Phone number should contain 8 digits, start by (81, 71, 77, 76, 03). Example: "76316965".'
        );
        break;
      case "Email":
        setMessage(
          'Email should contain at least 3 characteres and one digit with @gmail.com Example: "Example7@gmail || hotmail.com".'
        );
        break;
      case "Details":
        setMessage("Details should contain at least 10 characteres.");
        break;
    }
  }, [name]);

  return (
    <>
      {fromBtn ? (
        <div className="container-error">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "#bb2525" }}
          />
          <div className="error-message" style={{ color: "#bb2525" }}>
            Input must follow the hint!
          </div>
        </div>
      ) : (
        <div className="container-error">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            style={{ color: "#f4d462", fontSize: "25px" }}
          />

          <div className="error-message" style={{ color: "#777777" }}>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

ErrorMessage.propTypes = {
  name: PropTypes.string,
  fromBtn: PropTypes.bool,
};

export default ErrorMessage;
