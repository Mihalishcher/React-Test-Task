import { Link } from 'react-router-dom'

import './css/SideMenuItem.css'

const SideMenuItem = ({ logo, name, url }) => {
    return (
        <li className="aside-div">
            <Link to={'/' + url}
                className='link-logo'>
                <img src={logo} alt={name} />{name}
            </Link>
        </li >
    )
}

export default SideMenuItem