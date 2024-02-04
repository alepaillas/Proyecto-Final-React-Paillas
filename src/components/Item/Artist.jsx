import { Link } from "react-router-dom";

const Artist = ({ name, img, price, id }) => {
  return (
    <div className="card col s4">
      <div className="card-image">
        <Link to={`/artist/${id}`}>
          <img src={img} alt={name}></img>
        </Link>
        <Link to={`/artist/${id}`}>
          <span className="card-title">{name}</span>
        </Link>
        <a className="btn-floating btn-large halfway-fab waves-effect waves-light red">
          <i className="material-icons">add_shopping_cart</i>
        </a>
      </div>
      <div className="card-content">
        <p>lel</p>
      </div>
    </div>
  );
};

export default Artist;
