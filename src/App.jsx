import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import logo from "./assets/img/circle-black-text-1024.webp"

function App() {
    useEffect(() => {
	M.AutoInit();
    },[])
    
    return (
	<div className="App container">
	    <header className="row valign-wrapper">
		<img src={logo} alt="Logo" id="maxLogoSize" className="col s6 responsive-img"></img>
		<h1 className="col s6 center-align">Galería Anfisbena</h1>
	    </header>
	    <NavBar />
	    <ItemListContainer greeting={'Bienvenidos'}/>
	</div>
    );
}

export default App;
