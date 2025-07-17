import React from "react";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Heart Disease Predictor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
