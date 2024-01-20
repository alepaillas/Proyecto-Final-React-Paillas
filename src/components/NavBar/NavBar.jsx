import CartWidget from '../CartWidget/CartWidget'
import NavLinks from './NavLinks'

const NavBar = () => {
    return (
	<>
            <nav className="nav-wrapper">
		<a href="#" data-target="mobile-demo" className="sidenav-trigger">
		    <i className="material-icons">menu</i>
		</a>

		<div className="row">
		    <form className="col s4">
			<div className="input-field">
			    <input id="search" type="search" required></input>
			    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
			    <i className="material-icons">close</i>
			</div>
		    </form>
		    <ul className="hide-on-med-and-down col s6 centerNavLinks">
			<NavLinks />
		    </ul>
		    <CartWidget />
		</div>
	    </nav>

	    <ul className="sidenav" id="mobile-demo">
		<NavLinks />
	    </ul>
	< />
    )
}

export default NavBar
