import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
// import { useHistory } from "react-router";

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  const history = useHistory();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);