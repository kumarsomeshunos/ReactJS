import React from 'react'

const Footer = () => {
    let footerStyle = {
      padding: "1rem",
      width: "100vw",
      position: "sticky",
      bottom: "0",
      backgroundColor: "white",
    };
    let footerStyleFooter = {
        textAlign: "center"
    }
  return (
    <div style={footerStyle}>
      <hr></hr>
      <footer style={footerStyleFooter}>
        <p>Made with love by UNOS</p>
        <p>Copyright 2022 ToDoApp</p>
      </footer>
    </div>
  );
}

export default Footer