import flag from "../assets/dark-arrow.png";
import PropTypes from "prop-types";
import flag2 from "../assets/white-arrow.png";
const FlagButton = ({ btnText, arrowColorWhite }) => {
  return (
    <button className="btn-flag">
      {btnText}
      <img className="flag" src={arrowColorWhite ? flag : flag2} alt="" />
    </button>
  );
};

FlagButton.propTypes = {
  arrowColorWhite: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

export default FlagButton;
