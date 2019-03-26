import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxImage1 = () => {
  return (
    <Parallax className="custom-class" y={[-20, 20]}>
      <img src="https://picsum.photos/420/380" alt="" />
      <img src="https://picsum.photos/420/380" alt="" />
      <img src="https://picsum.photos/420/380" alt="" />
    </Parallax>
  );
};

export default ParallaxImage1;
