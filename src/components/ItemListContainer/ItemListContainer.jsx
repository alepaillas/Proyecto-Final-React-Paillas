import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncMock.jsx'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    useEffect(() => {
	// si existe categoryId -> getProductsByCategory else getProducts
	const asyncFunc = categoryId ? getProductsByCategory : getProducts
	
	asyncFunc(categoryId)
	    .then(response => {
		setProducts(response)
	    })
	    .catch(error => {
		console.error(error)
	    })
    }, [categoryId])
    
    return (
	<>
            <h3 className="center-align">{greeting}</h3>
	    <div className="row">
		<ItemList products ={products}/>
	    </div>
	</>
    )
}

export default ItemListContainer
