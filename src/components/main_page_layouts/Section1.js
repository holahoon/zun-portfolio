import React from "react";
import { Link } from "react-router-dom";

// Change color of JUN logo on scoll
// window.onscroll = () => {
//   const jun = document.querySelector(".jun-global");
//   const section3_top = document.querySelector("#section-1").offsetTop;
//   const windowPageY = window.pageYOffset;

//   if (windowPageY + jun.offsetHeight > section3_top) {
//     jun.style.color = "#333333";
//   } else {
//     jun.style.color = "#ffffff";
//   }
// };

const Section1 = props => {
  return (
    <section id="section-1" className="section" ref={props.section1}>
      <h1>
        Booooooom, yes this is very dramatic intro here. Jun Sung An is your
        product desginer.
      </h1>
      <div className="line" />

      <div className="small-words">small words</div>
      <Link to="" className="small-link">
        link
      </Link>
    </section>
  );
};

export default Section1;
