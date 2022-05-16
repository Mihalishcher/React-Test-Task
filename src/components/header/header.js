import AppInfo from "./AppInfo/AppInfo"
import Navbar from "./Navbar/Navbar"

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <AppInfo />
            <Navbar />
        </div>
    )
}

export default Header