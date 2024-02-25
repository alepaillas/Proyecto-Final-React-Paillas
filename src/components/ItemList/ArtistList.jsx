import { Link } from "react-router-dom"
import Artist from "../Item/Artist";

const ArtistList = ({ artists }) => {
  return (
    <div className="row">
      {artists.length == 0 ? (
        <div className="center">
          <p>No se encontraron artistas.</p>
          <Link to="/" className="btn">Limpiar filtros</Link>
        </div>
      ) : (
        artists.map((artist) => <Artist key={artist.id} {...artist} />)
      )}
    </div>
  );
};

export default ArtistList;
