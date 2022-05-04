import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <li><Link to='/'>Головна</Link></li>
            <li><Link to='/instrument'>Інструмент</Link></li>
            <li><a href="https://google.com.ua">Головна</a></li>
            <li><a href="https://google.com.ua">Компанія</a></li>
            <li><a href="https://google.com.ua">Обладнання</a></li>
            <li><a href="https://google.com.ua">Інструмент</a></li>
            <li><a href="https://google.com.ua">Послуги обробки</a></li>
            <li><a href="https://google.com.ua">Інжинірінг</a></li>
            <li><a href="https://google.com.ua">Контакти</a></li>

        </nav>
    )


}

export default Navbar