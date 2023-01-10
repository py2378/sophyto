import {NavLink} from 'react-router-dom';

function NavItem(props){

    let {link, text, path} = props;

    let pathTosvg = path;

    return (
        <li className='nav-item'>
            <NavLink to={link}
                     className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                     isActive={() => {
                         pathTosvg = path.split('_')[0] + "_orange.svg"

                     }}>
                <div>
                    <img
                        src={pathTosvg}
                        alt={text}/>
                </div>
                <div>
                    {text}
                </div>
                <hr/>
            </NavLink>
        </li>
    );
}

export default NavItem;