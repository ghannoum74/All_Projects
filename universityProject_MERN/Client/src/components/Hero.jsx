import Typewriter from "typewriter-effect";
import { useDispatch, useSelector } from "react-redux";
import { resetTheState } from "../state/blurBackgSlice";
import FlagButton from "../utility/FlagButton";
const Hero = () => {
  //get toggleblurBackground from reducer
  const { isBackgBlur } = useSelector((state) => state.toggleBackg);
  const dispatch = useDispatch();
  return (
    <div className="hero container" name="hero" data-isblured={isBackgBlur}>
      <div
        className="blurLayer"
        onClick={() => dispatch(resetTheState())}
      ></div>
      <div className="hero-text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("We Ensure better education for a better world")
              .start();
          }}
          options={{
            cursor: "",
            wrapperClassName: "title-hero",
            delay: 50,
          }}
        />
        <div className="parag-hero">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </div>
        <FlagButton btnText="Explore more" arrowColorWhite={true} />
      </div>
    </div>
  );
};

export default Hero;
