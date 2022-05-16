import { Link } from 'react-router-dom'

import './SideMenuItem.css'

const SideMenuItem = ({ logo, name, url }) => {
    return (
        <li className="aside-div">
            <Link to={'/React-test-task/' + url}
                className='link-logo'>
                <img src={logo} alt={name} />{name}
            </Link>
        </li >
    )
}

export default SideMenuItem