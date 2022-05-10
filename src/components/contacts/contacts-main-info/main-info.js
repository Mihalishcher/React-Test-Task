import SideMenu from "./side-menu/side-menu"
import DescriptionSide from "./description-side/description-side"

import './main-info.css'

const MainInfo = () => {
    return (
        <div className="main-info">
            <SideMenu />
            <DescriptionSide />
        </div>
    )
}

export default MainInfo