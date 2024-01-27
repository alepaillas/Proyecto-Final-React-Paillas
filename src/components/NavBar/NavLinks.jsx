import { Link } from 'react-router-dom'

const NavLinks = () => {
    return (
	<>
	    <li>
		<Link to={`/`}>Home</Link>
            </li>
	    <li>
		<Link to={`/about-us`}>About Us</Link>
            </li>
            <li>
		<Link to={`/contact`}>Contact</Link>
            </li>
	< />
    )
}

export default NavLinks
