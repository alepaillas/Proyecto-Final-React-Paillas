import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
    // materialize javascript
    useEffect(() => {
	M.AutoInit();
    },[])
    
    return (
	<BrowserRouter>
	    <div className="App container">
		<Header />
		<NavBar />
		<Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/about-us" element={<AboutUs />} />
		    <Route path="/contact" element={<Contact />} />
		</Routes>
		<Footer />
	    </div>
	</BrowserRouter>
    );
}

export default App;
