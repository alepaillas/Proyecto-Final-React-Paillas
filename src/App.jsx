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
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

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
		<main>
		    <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/category/:categoryId" element={<Home />} />
			<Route path="/artist/:artistId" element={<ItemDetailContainer />} />
			<Route path="/product/:productId" element={<ItemDetailContainer />} />
			<Route path='*' element={<h1>404 NOT FOUND</h1>} />
		    </Routes>
		</main>
		<Footer />
	    </div>
	</BrowserRouter>
    );
}

export default App;
