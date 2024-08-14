function thumbnails(props) {
  return (
    <div className="thumbnails-container">
      {props.thumbnails.map((item) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={item.id}
            className="thumbnail"
          />
        );
      })}
    </div>
  );
}

export default thumbnails;
