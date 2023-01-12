import { Link } from 'react-router-dom'
import NavLinksList from "./NavLinksList";
import "./NavBar.css";

function NavBar() {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-grey'>
                <Link to='/' id="nav-logo">
                    <img src={"./SOPHYTO.png"} alt="SOPHYTO" />
                </Link>
                <NavLinksList />
                <button id="nav-geolocalisation">
                    <img src="./geolocaliser.svg" alt="Géolocalisez vous"/>
                </button>
            </nav>
        </header>
    );
}

export default NavBar;