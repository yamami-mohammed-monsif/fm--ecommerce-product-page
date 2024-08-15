import { useState } from "react";
import next from "../../../images/icon-next.svg";
import previous from "../../../images/icon-previous.svg";

function Slide(props) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
  }

  function previousSlide() {
    setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
  }

  return (
    <div>
      <div className="slides-container">
        <img
          src={previous}
          alt="left-arrow"
          className="arrow arrow-left"
          onClick={previousSlide}
        />
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
        <img
          src={next}
          alt="right-arrow"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
      <div className="thumbnails-container">
        {props.thumbnails.map((item, index) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={item.id}
              className={
                slide === index ? "thumbnail thumbnail-active" : "thumbnail"
              }
              onClick={() => setSlide(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slide;
