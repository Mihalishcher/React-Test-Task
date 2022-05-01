import logoAsTec from '../../../img/logo-as-tec.png'
import emailLogo from '../../../img/e-mail-as-tec.png'

import './app-info.css'


const AppInfo = () => {
    return (
        <div className="head">
            <img className="app-logo" src={logoAsTec} alt="Company logo" />
            <div className="title-site">
                <h1>Компанія AS-TEC</h1>
            </div>
            <div className="mail-logo">
                <img src={emailLogo} width="64px" alt="e-mail-logo" />
            </div>
            <div className="contact-info">
                <a href="tel:+380661234567">Tel: +38 066-123-45-67</a><br />
                <a href="email:mail@gmail.com">E-Mail : mail@gmail.com</a>
            </div>
        </div>
    )
}

export default AppInfo