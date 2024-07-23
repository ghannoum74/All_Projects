import logo from "../assets/logo.png";
import menuIcon from "../assets/menu-icon.png";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheBlur } from "../state/blurBackgSlice";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { useInView } from "react-intersection-observer";
function Navbar() {
  const { isMenuVisible } = useSelector((state) => state.toggleBackg);

  // for menu bar
  const transition = useTransition(isMenuVisible, {
    from: { x: 99, y: 0, opacity: 0 },
    enter: { x: -200, y: 0, opacity: 1 },
    leave: { x: 99, y: 0, opacity: 0 },
  });

  //import useDIspatch to change the datasetOf hero container
  const dispatch = useDispatch();

  const setBlurAndShowMenu = () => {
    dispatch(toggleTheBlur());
  };
  //navbar on scrolling get dark
  const [isDarkNav, setIsDarkNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setIsDarkNav(true) : setIsDarkNav(false);
    });
  }, []);

  // for the logo and menu

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const logoSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateX(0)"
      : inView
      ? "translateX(0)"
      : "translateX(-100px)",
    config: { duration: 500 },
  });
  return (
    <nav className={`navbar container ${isDarkNav ? "dark-nav" : ""}`}>
      <animated.img
        className="logo"
        src={logo}
        alt=""
        ref={ref}
        style={logoSpring}
      />
      <animated.div className="a" ref={ref}>
        <Menu btnClass="contact-us" listClass="list" />
      </animated.div>

      <img
        className="menu-icon"
        src={menuIcon}
        alt=""
        onClick={setBlurAndShowMenu}
      />
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="menu">
            <Menu btnClass="menu-btn" listClass="menu-list" />
          </animated.div>
        ) : null
      )}
    </nav>
  );
}

export default Navbar;
