import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return (
	<>
	    <li>
		<NavLink to={`/`}>
		    Home
		</NavLink>
            </li>
	    <li>
		<NavLink to={`/about-us`}>
		    About Us
		</NavLink>
            </li>
            <li>
		<NavLink to={`/contact`}>
		    Contact
		</NavLink>
            </li>
	< />
    )
}

export default NavLinks
