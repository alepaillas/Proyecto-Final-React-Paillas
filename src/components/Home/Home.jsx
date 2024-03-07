import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemCount from "../ItemCount/ItemCount";

const Home = () => {
  return (
    <>
      <h3 className="center-align">Home</h3>
      <ItemListContainer greeting={"Bienvenidos"} />
    </>
  );
};

export default Home;
