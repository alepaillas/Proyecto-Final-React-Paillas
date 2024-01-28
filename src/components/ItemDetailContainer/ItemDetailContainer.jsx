import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    
    useEffect(() => {
	getProductById(itemId)
	    .then(response => {
		setProduct(response)
		//console.log(response)
	    })
	    .catch(error => {
		console.error(error)
	    })
    }, [itemId])

    return(
	<div>
	    <ItemDetail {...product} />
	    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
	</div>
    )
}

export default ItemDetailContainer
