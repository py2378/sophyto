import {NavLink} from 'react-router-dom';

function NavItem(props){

    let {link, text, path} = props;

    let pathTosvg = path;

    return (
        <li className='nav-item'>
            <NavLink to={link}
                     className={({ isactive }) => (isactive ? 'active' : 'inactive')}
                     isactive={() => {
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