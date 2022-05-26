import SideMenu from "./SideMenu"
import DescriptionSide from "./DescriptionSide"

import './css/HomeMainInfo.css'

const HomeMainInfo = () => {
    return (
        <div className="main-info">
            <SideMenu />
            <DescriptionSide />
        </div>
    )
}

export default HomeMainInfo