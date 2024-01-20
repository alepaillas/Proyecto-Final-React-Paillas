import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import logo from "./assets/img/circle-black-text-512.webp"

function App() {
    return (
	<div className="App">
	    <header>
		<img src={logo} alt="Logo"></img>
		<h1>Galería Anfisbena</h1>
	    </header>
	    <NavBar />
	    <ItemListContainer greeting={'Bienvenidos'}/>
	</div>
    );
}

export default App;
