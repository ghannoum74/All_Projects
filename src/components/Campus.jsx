import Titles from "../utility/Titles";
import gallery_1 from "../assets/gallery-1.png";
import gallery_2 from "../assets/gallery-2.png";
import gallery_3 from "../assets/gallery-3.png";
import gallery_4 from "../assets/gallery-4.png";
import FlagButton from "../utility/FlagButton";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const Campus = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const imagesMotion = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0.5,
    config: { duration: 300 },
  });
  return (
    <div className="campus">
      <Titles supTitle="GALLERY" title="Campus Photos" />
      <div className="gallery">
        <animated.img ref={ref} style={imagesMotion} src={gallery_1} alt="" />
        <animated.img ref={ref} style={imagesMotion} src={gallery_2} alt="" />
        <animated.img ref={ref} style={imagesMotion} src={gallery_3} alt="" />
        <animated.img ref={ref} style={imagesMotion} src={gallery_4} alt="" />
      </div>
      <FlagButton btnText="See more here" arrowColorWhite={false} />
    </div>
  );
};

export default Campus;
