import { useState } from "react";
import next from "../../../public/images/icon-next.svg";
import previous from "../../../public/images/icon-previous.svg";
import Modal from "./Modal";

function Slide(props) {
  const [slide, setSlide] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function nextSlide() {
    setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
  }

  function previousSlide() {
    setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
  }

  function hanldeOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div>
      {openModal && (
        <Modal
          slides={props.slides}
          thumbnails={props.thumbnails}
          slideNumber={slide}
          next={nextSlide}
          previous={previousSlide}
          onCloseModal={handleCloseModal}
        />
      )}

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
              alt={item.alt}
              key={item.id}
              className={slide === index ? "slide" : "slide-hidden"}
              onClick={() => hanldeOpenModal(index)}
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
