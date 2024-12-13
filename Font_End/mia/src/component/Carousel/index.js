// /components/Carousel/index.js
import { memo } from "react";

import React, { useState } from "react";
import "./style.scss";

import slide1 from "../../assets/images/1.jpg";
import slide2 from "../../assets/images/2.jpg";
import slide3 from "../../assets/images/3.jpg";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 const slides = [
   {
     image: slide1, // Sử dụng biến đã import
     caption: "First Slide Caption",
     description: "This is the first slide description.",
   },
   {
     image: slide2, // Sử dụng biến đã import
     caption: "Second Slide Caption",
     description: "This is the second slide description.",
   },
   {
     image: slide3, // Sử dụng biến đã import
     caption: "Third Slide Caption",
     description: "This is the third slide description.",
   },
 ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].caption}
            className="carousel-image"
          />
          <div className="carousel-caption">
            <h5>{slides[currentIndex].caption}</h5>
            <p>{slides[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
