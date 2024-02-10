import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemCount from "../ItemCount/ItemCount";

const Home = () => {
  return (
    <>
      <h2 className="center-align">Home</h2>
      <ItemListContainer greeting={"Bienvenidos"} />
    </>
  );
};

export default Home;
