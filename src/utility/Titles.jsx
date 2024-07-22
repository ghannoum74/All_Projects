import PropTypes from "prop-types";
const Titles = ({ supTitle, title }) => {
  return (
    <div className="container container-titles">
      <div className="sup-title">{supTitle}</div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Titles;
