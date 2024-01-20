import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button>Pinturas</button>
                </li>
                <li>
                    <button>Dibujos</button>
                </li>
                <li>
                    <button>Esculturas</button>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
