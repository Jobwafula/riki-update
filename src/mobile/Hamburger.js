import React, { useState } from "react";
import ApplyLogin from "../components/ApplyLogin";

const Hamburger = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        position: "fixed",
        right: "0",
      }}
      onClick={handleToggleClick}
    >
      <div
        style={{
          width: "25px",
          height: "3px",
          backgroundColor: "#000",
          margin: "4px 0",
          transition: "all 0.3s ease",
          transform: showLinks ? "rotate(-45deg) translate(-5px, 5px)" : "",
        }}
      />
      <div
        style={{
          width: "25px",
          height: "3px",
          backgroundColor: "#000",
          margin: "4px 0",
          transition: "all 0.3s ease",
          opacity: showLinks ? "0" : "1",
        }}
      />
      <div
        style={{
          width: "25px",
          height: "3px",
          backgroundColor: "#000",
          margin: "4px 0",
          transition: "all 0.3s ease",
          transform: showLinks ? "rotate(45deg) translate(-5px, -5px)" : "",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          position: "fixed",
          left: "0",
          top: "0px",
          opacity: showLinks ? "1" : "0",
          transition: "opacity 2s ease",
          height:'100vh',
          width:'90vw',
          backgroundColor:'white'
        }}
      >
        <a
          href="#"
          style={{ textDecoration: "none", color: "#000", margin: "10px 0" }}
        >
          Link 1
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "#000", margin: "10px 0" }}
        >
          Link 2
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "#000", margin: "10px 0" }}
        >
          Link 3
        </a>

        <ApplyLogin />
      </div>
    </div>
  );
};

export default Hamburger;
