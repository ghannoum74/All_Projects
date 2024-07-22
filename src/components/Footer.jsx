import { faCopyright } from "@fortawesome/free-solid-svg-icons/faCopyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <FontAwesomeIcon
          icon={faCopyright}
          style={{ paddingRight: "5px", width: "15px" }}
        />
        <span>2024 Edusity.All rights reserved</span>
      </div>{" "}
      <div className="right-side">
        <span>Terms of Services</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
