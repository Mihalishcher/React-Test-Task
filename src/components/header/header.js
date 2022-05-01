import AppInfo from "./app-info/app-info"
import Navbar from "./navbar/navbar"

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <AppInfo />
            <Navbar />
        </div>
    )
}

export default Header