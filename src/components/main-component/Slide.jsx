import { useState } from "react";

function Slide(props) {
  const [slide, setSlide] = useState(0);
  return (
    <div className="slides-container">
      {props.slides.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.src}
            key={item.id}
            className={slide === index ? "slide" : "slide-hidden"}
          />
        );
      })}
    </div>
  );
}

export default Slide;
