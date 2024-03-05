import { Link } from "react-router-dom";
import "./Item.css";

const Artist = ({ name, img, price, id, description }) => {
  return (
    /*    <div className="card artist">
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
    </div> */
    <div className="artist center">
      <Link to={`/artist/${id}`}>
        <img src={img} alt={name} className="responsive-img circle"></img>
      </Link>
      <div>
        <Link to={`/artist/${id}`}>
          <p className="artistTitle">{name}</p>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Artist;
