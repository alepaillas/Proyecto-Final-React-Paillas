const ItemDetail = ({ img, name, description }) => {
  return (
    <div className="card col s4">
      <div className="card-image">
        <img src={img} alt={name}></img>
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
