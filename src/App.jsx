import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Galería Anfisbena</h1>
      </header>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
