import React, { useState, useEffect } from "react";
import "./main.css";

function Section() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./icons/hMyT4CDXR.jpg",
    "./icons/HJRBbe94Q.jpg",
    "./icons/_gn8GLrE6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="banner" id="home">
      <div className="container-main">
        <div className="main-content">
          <div className="main-section">
            <div className="slider-content">
              <h2 className="title">
                Search your rare Dogs by world class Dogs
              </h2>
              <p className="banner-disc-one">
                Dive into a world where every breed's history, characteristics,
                <br />
                and care requirements are just a search away.
              </p>
            </div>
          </div>
          <div className="main-section">
            <div className="slick-slider">
              {slides.map((slide, index) => (
                <div
                  className={`slick-slide ${
                    index === currentSlide ? "active" : ""
                  }`}
                  key={index}
                >
                  <img src={slide} alt={`Dog ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
