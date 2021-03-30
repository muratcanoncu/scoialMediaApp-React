import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="w-100 d-flex justify-content-between align-items-center text-white mt-5"
    >
      <p>
        <span className="text-dark font-weight-bolder">Murat Can Öncü </span>
        Copyright&copy;{new Date().getFullYear()}
      </p>
      <h4>Lets Get Social</h4>
      <i className="fas fa-frog"></i>
    </div>
  );
}

export default Footer;
