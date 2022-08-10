import React from "react";

const Footer = () => {
  let FooterStyle = {
    width: "100vw",
    position: "sticky",
    bottom: "0",
    textAlign: "center",
  };
  return (
    <footer style={FooterStyle}>
      <p>Made with love by UNOS</p>
      <br />
      <p>Copyright 2022 UNOS Industries</p>
    </footer>
  );
};

export default Footer;
