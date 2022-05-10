import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <li><NavLink to='/React-test-task/'>Головна</NavLink></li>
            <li><NavLink to='/React-test-task/Company'>Компанія</NavLink></li>
            <li><NavLink to='/React-test-task/Obladnanya'>Обладнання</NavLink></li>
            <li><NavLink to='/React-test-task/Instrument'>Інструмент</NavLink></li>
            <li><NavLink to='/React-test-task/Obrobka'>Послуги обробки</NavLink></li>
            <li><NavLink to='/React-test-task/Inzhiniring'>Інжинірінг</NavLink></li>
            <li><NavLink to='/React-test-task/Contacts'>Контакти</NavLink></li>
        </nav>
    )


}

export default Navbar