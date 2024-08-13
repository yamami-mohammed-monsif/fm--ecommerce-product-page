function Slide(props) {
  return (
    <div className="slides">
      {props.slides.map((item) => {
        return <img src={item.src} alt={item.src} key={item.id} />;
      })}
    </div>
  );
}

export default Slide;
