import Images from '../../../../components/Images/Images';
import SideMenuItem from './SideMenuItem/SideMenuItem';

import './SideMenu.css'

const SideMenu = () => {
    return (
        <ul className="side-menu">
            <SideMenuItem logo={Images.golovnaLogo1} name='ОБЛАДНАННЯ' url='obladnanya' />
            <SideMenuItem logo={Images.golovnaLogo2} name='ІНСТРУМЕНТ' url='instrument' />
            <SideMenuItem logo={Images.golovnaLogo3} name='ПОСЛУГИ ОБРОБКИ' url='obrobka' />
            <SideMenuItem logo={Images.golovnaLogo4} name='ІНЖИНІРИНГ' url='inzhiniring' />
        </ul>
    )
}

export default SideMenu