import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      <h1 className="text-center my-4">
        About Page {a.state.name}, {a.state.class}
      </h1>
    </div>
  );
};

export default About;
