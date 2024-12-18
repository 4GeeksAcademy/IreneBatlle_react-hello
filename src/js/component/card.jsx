import React from "react";

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <div className="card" style={{ width: "18rem", display: "flex", flexDirection: "column" }}>
      <img src={image} className="card-img" alt={title} />
      <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-outline-success" style={{ marginTop: "auto" }}>
          Conócelos!
        </a>
      </div>
    </div>
  );
};

export default Card;