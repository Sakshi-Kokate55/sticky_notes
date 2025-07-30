import React, { useState } from "react";

const Card = (props) => {
  const [likes, setLikes] = useState(0);

  const likeBtnClickHandler = () => {
    setLikes(likes + 1);
  };

  const cardStyle = {
    backgroundColor: "#f3e8ff", 
    color: "#333",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(138, 43, 226, 0.2)",
    fontFamily: "Segoe UI, sans-serif",
    width: "300px",
    textAlign: "center",
    transition: "transform 0.2s ease-in-out",
  };

  const headingStyle = {
    fontSize: "20px",
    color: "#6a0dad",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "12px",
  };

  const likeCountStyle = {
    fontSize: "14px",
    color: "#777",
    marginBottom: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#8e44ad",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background 0.3s ease-in-out",
  };

  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>{props.heading}</h1>
      <h2 style={descStyle}>{props.desc}</h2>
      <h3 style={likeCountStyle}>Likes: {likes}</h3>
      <button
        style={buttonStyle}
        onClick={likeBtnClickHandler}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#6a0dad")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#8e44ad")}
      >
        Like ❤️
      </button>
    </div>
  );
};

export default Card;
