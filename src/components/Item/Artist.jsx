import { Link } from "react-router-dom";

const Artist = ({ name, img, price, id, description }) => {
  return (
    <div className="card col s4">
      <div className="card-image">
        <Link to={`/artist/${id}`}>
          <img src={img} alt={name}></img>
        </Link>
        <Link to={`/artist/${id}`}>
          <span className="card-title">{name}</span>
        </Link>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Artist;
