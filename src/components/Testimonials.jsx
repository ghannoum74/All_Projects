import Titles from "../utility/Titles";
import User from "../utility/User";
import student_1 from "../assets/user-1.png";
import student_2 from "../assets/user-2.png";
import student_3 from "../assets/user-3.png";
import student_4 from "../assets/user-4.png";
import flag from "../assets/next-icon.png";
import { useRef, useState } from "react";

const Testimonials = () => {
  const [transitionX, setTransitionX] = useState(0);
  const [showBackwardButton, setShowBackwardButton] = useState(false);
  const [showForwardButton, setShowForwardButton] = useState(true);

  const slides = [
    { user: student_1 },
    { user: student_2 },
    { user: student_3 },
  ];

  const slider = useRef();

  const slideForward = () => {
    if (transitionX > -50) {
      setTransitionX((prevTransitionX) => prevTransitionX - 25);
      setShowBackwardButton(true);
      if (transitionX === -25) {
        setShowForwardButton(false);
      }
    }
  };

  const slideBackward = () => {
    if (transitionX < 0) {
      setTransitionX((prevTransitionX) => prevTransitionX + 25);
      setShowForwardButton(true);
      if (transitionX === -25) {
        setShowBackwardButton(false);
      }
    }
  };

  return (
    <div className="testimonials" name="testionials">
      <Titles supTitle="TESTIMONIALS" title="What Student Says" />
      <div
        onClick={slideForward}
        className={`next ${showForwardButton ? "" : "hidden"}`}
      >
        {" "}
        <img src={flag} alt="" />
      </div>
      <div
        onClick={slideBackward}
        className={`previous next ${showBackwardButton ? "" : "hidden"}`}
      >
        <img src={flag} alt="" />
      </div>

      <div className="slider">
        <ul
          className="users"
          ref={slider}
          style={{ transform: `translateX(${transitionX}%)` }}
        >
          {slides.map((slide, idx) => (
            <li className="user" key={idx}>
              <User user={slide.user} />
            </li>
          ))}
          <li className="user spetial">
            <User user={student_4} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
