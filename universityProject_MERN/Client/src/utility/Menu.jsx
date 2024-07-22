import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";

const Menu = ({ btnClass, listClass }) => {
  return (
    <ul className={`${listClass}`}>
      <li>
        <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="program" smooth={true} offset={-50} duration={500}>
          Program
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} offset={-130} duration={500}>
          About Us
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="campus" smooth={true} offset={-150} duration={500}>
          Campus
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="testionials" smooth={true} offset={-260} duration={500}>
          Testimonials
        </ScrollLink>
      </li>
      <button className={`${btnClass}`}>
        <ScrollLink to="contact" smooth={true} offset={-90} duration={500}>
          Contact Us
        </ScrollLink>
      </button>
    </ul>
  );
};

export default Menu;
