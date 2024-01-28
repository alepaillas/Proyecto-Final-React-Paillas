import { Link } from 'react-router-dom'

const Item = ({name, img, price, id}) => {
    return (
	<div className="card col s4">
            <div className="card-image">
		<Link to={`/item/${id}`}>
		    <img src={img} alt={name}></img>
		</Link>
		<span className="card-title">{name}</span>
		<a className="btn-floating btn-large halfway-fab waves-effect waves-light red">
		    <i className="material-icons">add_shopping_cart</i>
		</a>
	    </div>
	    <div className="card-content">
		<p>${price}</p>
	    </div>
	</div>
    )
}

export default Item
