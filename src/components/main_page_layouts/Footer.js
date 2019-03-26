import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="jun-footer">JUN</div>
      <div className="copy-right">&copy; Copyright 2019 and other stuff</div>

      <Link to="" className="footer-link link1">
        Maybe other links
      </Link>
      <Link to="" className="footer-link link2">
        Maybe links
      </Link>
    </footer>
  );
};

export default Footer;
