import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import about from "../assets/about.png";
import playIcon from "../assets/play-icon.png";
import Video from "../utility/Video";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Intersection Observer
  // this for handle when this component is mounten so it's like scrollDown or useEffect
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animations for the "about" section
  const aboutAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-100px)",
    config: { duration: 500 },
  });

  // Animations for the second "about" section
  const aboutTextAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { duration: 500 },
    delay: 300,
  });

  return (
    <div className="container-about" name="about">
      <animated.div className="about" style={aboutAnimation} ref={ref}>
        <img className="frame" src={about} alt="" />
        <img
          className="playIcon"
          src={playIcon}
          alt=""
          onClick={() => setShowVideo(true)}
        />
        <Video showVideo={showVideo} setShowVideo={setShowVideo} />
      </animated.div>

      <animated.div className="about" style={aboutTextAnimation}>
        <div className="sup-title about-sup-title">ABOUT UNIVERSITY</div>
        <h1 className="title about-title">
          Nurturing Tomorrow&apos;s Leaders Today
        </h1>
        <p>
          Embark on a transformative educational journey with our
          university&apos;s comprehensive education programs. Our cutting-edge
          curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </animated.div>
    </div>
  );
};

export default About;
