import React, { useState } from "react";
import "../App.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide}
        className="absolute top-1/2 left-0 transform-translate-y-1/2 bg-gray-800 text-white px-4 py-2">Prev</button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform-translate-y-1/2 bg-gray-800 text-white px-4 py-2">Next</button>
    </div>
  );
};

export default Carousel;
