import Artist from "../Item/Artist";

const ArtistList = ({ artists }) => {
  return (
    <div className="row itemList1">
      {artists.map((artist) => (
        <Artist key={artist.id} {...artist} />
      ))}
    </div>
  );
};

export default ArtistList;
