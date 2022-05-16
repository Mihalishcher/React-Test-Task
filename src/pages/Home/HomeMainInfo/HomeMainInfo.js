import SideMenu from "./SideMenu/SideMenu"
import DescriptionSide from "./DescriptionSide/DescriptionSide"

import './HomeMainInfo.css'

const HomeMainInfo = () => {
    return (
        <div className="main-info">
            <SideMenu />
            <DescriptionSide />
        </div>
    )
}

export default HomeMainInfo