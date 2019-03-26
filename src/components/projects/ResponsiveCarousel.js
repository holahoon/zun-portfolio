import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ResponsiveCarousel = () => {
  return (
    <Carousel
      className="container"
      showArrows={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1500}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src="https://picsum.photos/720/440?random" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/720/440?random" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/720/440?random" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/720/440?random" alt="" />
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousel;
