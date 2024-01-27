import logo from '../../assets/img/circle-black-text-1024.webp'

const Header = () => {
    return (
	<header className="row valign-wrapper">
	    <img src={logo} alt="Logo" id="maxLogoSize" className="col s6 responsive-img"></img>
	    <h1 className="col s6 center-align">Galería Anfisbena</h1>
	</header>
    )
}

export default Header
