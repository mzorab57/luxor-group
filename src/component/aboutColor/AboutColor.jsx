import React from "react";
import "./AboutColor.css";

const AboutColor = () => {
  return (
    <section className="about-color-section">
      <div className="container">
        <div className="about-color-content">
          <h2 className="about-color-title">About Our Colors</h2>
          <p className="about-color-description">
            We believe in the power of colors to transform spaces and evoke
            emotions. Our carefully curated color palette reflects our
            commitment to creating beautiful and meaningful designs.
          </p>
          <div className="color-palette">
            <div className="color-item">
              <div
                className="color-circle"
                style={{ backgroundColor: "#3498db" }}
              ></div>
              <span>Primary Blue</span>
            </div>
            <div className="color-item">
              <div
                className="color-circle"
                style={{ backgroundColor: "#e74c3c" }}
              ></div>
              <span>Accent Red</span>
            </div>
            <div className="color-item">
              <div
                className="color-circle"
                style={{ backgroundColor: "#2ecc71" }}
              ></div>
              <span>Fresh Green</span>
            </div>
            <div className="color-item">
              <div
                className="color-circle"
                style={{ backgroundColor: "#f39c12" }}
              ></div>
              <span>Warm Orange</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutColor;
