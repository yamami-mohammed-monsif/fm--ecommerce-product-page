function thumbnails(props) {
  return (
    <div className="thumbnails">
      {props.thumbnails.map((item) => {
        return <img src={item.src} alt={item.alt} key={item.id} />;
      })}
    </div>
  );
}

export default thumbnails;
