import { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProducts } from '../../asyncMock.jsx'
import { getArtists } from '../../asyncMock.jsx'
import ProductList from '../ItemList/ProductList'
import ArtistList from '../ItemList/ArtistList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { productCategory } = useParams()
    
    useEffect(() => {
	// si existe productCategory -> getProductsByCategory else getProducts
	const asyncFunc = productCategory ? getProductsByCategory : getProducts
	
	asyncFunc(productCategory)
	    .then(response => {
		setProducts(response)
	    })
	    .catch(error => {
		console.error(error)
	    })
    }, [productCategory])

    // aquí se repite código, a futuro hay que reemplazar por función o componente de orden superior
    
    const [artists, setArtists] = useState([])
    const { artistCategory } = useParams()
    
    useEffect(() => {
	// si existe artistCategory -> getArtistsByCategory else getArtists
	const asyncFunc = artistCategory ? getArtistsByCategory : getArtists
	
	asyncFunc(artistCategory)
	    .then(response => {
		setArtists(response)
	    })
	    .catch(error => {
		console.error(error)
	    })
    }, [artistCategory])

    // para inicializar materialize tabs
    useEffect(() => {
	const tabsContainer = document.querySelector(".tabs")
	const options = {
	    swipeable: false // swipeable tabs no son responsive, que ironía
	}
	const instance = M.Tabs.init(tabsContainer, options)
    })
    
    return (
	<div className="row">
            <h3 className="col s12 center-align">{greeting}</h3>
	    <div className="col s12">
		<ul className="tabs">
		    <li className="tab col s6">
			<a href="#artistas">Artistas</a>
		    </li>
		    <li className="tab col s6">
			<a href="#pinturas">Pinturas</a>
		    </li>
		</ul>
	    </div>
	    <div className="">
		<Link to ={`/category/abstracto`} className="chip">
		    Abstracto
		</Link>
		<Link to ={`/category/realista`} className="chip">
		    Realista
		</Link>
		<Link to ={`/category/paisaje`} className="chip">
		    Paisaje
		</Link>
	    </div>
	    <div id="artistas" className="col s12">
		<ArtistList artists ={artists}/>
	    </div>
	    <div id="pinturas" className="col s12">
		<ProductList products ={products}/>
	    </div>
	</div>
    )
}

export default ItemListContainer
