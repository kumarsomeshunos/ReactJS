import React from 'react'

const Footer = () => {
    let footerStyle = {
      position: "sticky",
      top: "100vh",
      padding: "1rem",
      width: "100vw",
      backgroundColor: "white",
    };
    let footerStyleFooter = {
        textAlign: "center"
    }
  return (
    <div style={footerStyle}>
      <hr></hr>
      <footer style={footerStyleFooter}>
        <p>Made with love in India</p>
        <p>Copyright 2022 ToDoApp</p>
      </footer>
    </div>
  );
}

export default Footer