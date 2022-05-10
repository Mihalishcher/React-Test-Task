import golovnaLogo1 from '../../../../img/golovna-1-as-tec.jpg';
import golovnaLogo2 from '../../../../img/golovna-2-as-tec.jpg';
import golovnaLogo3 from '../../../../img/golovna-3-as-tec.jpg';
import golovnaLogo4 from '../../../../img/golovna-4-as-tec.jpg';

import SideMenuItem from './side-menu-item/side-menu-item';

import './side-menu.css'

const SideMenu = () => {
    return (
        <ul className="side-menu">
            <SideMenuItem logo={golovnaLogo1} name='ОБЛАДНАННЯ' />
            <SideMenuItem logo={golovnaLogo2} name='ІНСТРУМЕНТ' />
            <SideMenuItem logo={golovnaLogo3} name='ПОСЛУГИ ОБРОБКИ' />
            <SideMenuItem logo={golovnaLogo4} name='ІНЖИНІРИНГ' />
        </ul>
    )
}

export default SideMenu