import next from "../../../public/images/icon-next.svg";
import previous from "../../../public/images/icon-previous.svg";
import close from "../../../public/images/icon-close.svg";

function Modal(props) {
  return (
    <div className="modal">
      <div className="carousel">
        <img
          src={close}
          alt=""
          className="close"
          onClick={props.onCloseModal}
        />
        <img
          src={previous}
          alt="left-arrow"
          className="arrow arrow-left"
          onClick={props.previous}
        />
        <img
          src={props.slides[props.slideNumber].src}
          alt=""
          className="imgPreview slide"
        />
        <img
          src={next}
          alt="right-arrow"
          className="arrow arrow-right"
          onClick={props.next}
        />
      </div>
    </div>
  );
}

export default Modal;
