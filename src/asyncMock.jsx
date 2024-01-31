const products = [
    {
	id: '1',
	name: 'Ansiedad',
	price: '35000',
	category: 'Abstracto',
	img: '/src/assets/img/products/ansiedad-thumbnail.webp',
	stock: '1',
	description: 'Mi descripción'
    },
    {
	id: '2',
	name: 'Confrontación',
	price: '70000',
	category: 'Abstracto',
	img: '/src/assets/img/products/confrontacion-thumbnail.webp',
	stock: '1',
	description: 'Mi descripción'
    },
]

const artists = [
    {
	id: '1',
	name: 'Alejandra Victoria Paillas Villavicencio',
	category: 'Abstracto',
	img: '/src/assets/img/artists/ale.webp',
	description: 'Mi descripción.'
    },
    {
	id: '2',
	name: 'Luna Cristal Salas Madariaga',
	category: 'Abstracto',
	img: '/src/assets/img/artists/luna.webp',
	description: 'Mi descripción.'
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

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(products.find((product) => product.category === productCategory))
	}, 500)
    })
}

// aquí se repite código, a futuro hay que reemplazar por función o componente de orden superior

export const getArtists = () => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(artists)
	}, 500)
    })
}

export const getArtistById = (artistId) => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(artists.find(artist => artist.id === artistId))
	}, 500)
    })
}

export const getArtistsByCategory = (artistCategory) => {
    return new Promise((resolve) => {
	setTimeout(() => {
	    resolve(artists.find((artist) => artist.category === artistCategory))
	}, 500)
    })
}
