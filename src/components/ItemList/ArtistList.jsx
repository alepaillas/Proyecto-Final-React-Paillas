import { Link } from "react-router-dom";
import Artist from "../Item/Artist";
import "./ItemList.css";

const ArtistList = ({ loading, artists }) => {
  return (
    <div className="artistList">
      {/* alternativa con ternary operator ya que no podemos
       usar la sintaxis if() {} con arrow function component */}
      {/* si no estamos cargando y no hay artistas, entonces render */}
      {!loading && artists.length == 0 ? (
        <div className="col s4 offset-s4 center">
          <p>No se encontraron artistas.</p>
          <Link to="/" className="btn">
            Limpiar filtros
          </Link>
        </div>
      ) : (
        // else
        artists.map((artist) => <Artist key={artist.id} {...artist} />)
      )}
    </div>
  );
};

export default ArtistList;
