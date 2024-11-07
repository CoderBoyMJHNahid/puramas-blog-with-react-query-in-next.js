"use client";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <span style={{ fontSize: "2em", textTransform: "uppercase", display: "inline-block",color:"white" }}>
      <span style={{ color: "#ffd966" }}>La mejor Marca de </span>
      <TypeAnimation
        sequence={[
          "Ortopedia",
          1000,
          "Fisioterapia",
          1000,
          "Salud",
          1000,
          "Belleza",
          1000,
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
      />
    </span>
  );
};

export default TypingText;
