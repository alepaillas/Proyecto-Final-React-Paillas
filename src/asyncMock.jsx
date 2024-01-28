const products = [
    {
	id: '1',
	name: 'Ansiedad',
	price: '35000',
	category: 'Pinturas',
	img: '/src/assets/img/products/ansiedad-thumbnail.webp',
	stock: '1',
	description: 'Mi descripción'
    },
    {
	id: '2',
	name: 'Confrontación',
	price: '70000',
	category: 'Pinturas',
	img: '/src/assets/img/products/confrontacion-thumbnail.webp',
	stock: '1',
	description: 'Mi descripción'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(products)
	}, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(products.find(product => product.id === productId))
	}, 500)
    })
}
