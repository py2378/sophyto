import NavItem from "./NavItem";

function NavLinksList(){
    return(
        <ul id="nav-tabs">
            <NavItem link='/' text='Autour de moi' path="mesparcelles_blue.svg"/>
            <NavItem link='/echanger' text='Echanger' path="echanger_blue.svg"/>
        </ul>
    );
}

export default NavLinksList;