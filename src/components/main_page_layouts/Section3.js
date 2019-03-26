import React from "react";
import { Link } from "react-router-dom";

// Copy Email
const copyEmail = () => {
  const myEmail = document.querySelector("#my-email");

  myEmail.addEventListener("copy", e => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", myEmail.textContent);
      console.log("copied: " + e.clipboardData.getData("text"));
    }
  });
  document.execCommand("copy");
};

const Section3 = props => {
  return (
    <section id="section-3" className="section" ref={props.section3}>
      <h3>
        Maybe about me section goes here with your contact information in light
        background.
        <span onClick={copyEmail} id="my-email">
          This link(email)
        </span>{" "}
        copies the email address onclick.
      </h3>

      <span className="line" />

      <Link to="" className="small-link link1">
        Maybe links
      </Link>
      <Link to="" className="small-link link2">
        Maybe links
      </Link>
    </section>
  );
};

export default Section3;
