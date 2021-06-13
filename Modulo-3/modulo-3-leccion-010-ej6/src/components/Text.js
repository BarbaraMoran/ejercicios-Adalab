import React, { useState, useEffect } from "react";

const Text = () => {
  const [userText, setUserText] = useState(localStorage.getItem("userText"));

  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    localStorage.setItem("userText", userText);
  });

  const handleTextArea = (event) => {
    const userText = event.target.value;
    setUserText(userText);
  };

  return (
    <textarea
      id="comments"
      name="comments"
      value={userText}
      rows="8"
      cols="80"
      onChange={handleTextArea}
    />
  );
};

export default Text;
