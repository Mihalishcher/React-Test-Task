import './side-menu-item.css'

const SideMenuItem = ({ logo, name }) => {
    return (
        <li className="aside-div">
            <a href="https://google.com.ua" className='link-logo'>
                <img src={logo} alt={name} />{name}
            </a>
        </li>
    )
}

export default SideMenuItem