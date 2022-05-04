import { Component } from 'react'
import logoAsTec from '../../../img/logo-as-tec.png'
import emailLogo from '../../../img/e-mail-as-tec.png'

import './app-info.css'



class AppInfo extends Component {
    constructor() {
        super()
        this.state = {
            peoples: 0
        }
    }

    onLinkClick = () => {
        this.setState(state => ({
            peoples: state.peoples + 1
        }))
    }

    render() {

        return (
            <div className="head">
                <img className="app-logo" src={logoAsTec} alt="Company logo" />
                <div className="mail-logo">
                    <img src={emailLogo} width="64px" alt="e-mail-logo" />
                </div>
                <div className="contact-info">
                    <a href="tel:+380661234567" onClick={this.onLinkClick}>Tel: +38 066-123-45-67</a><br />
                    <a href="mailto:mail@gmail.com" onClick={this.onLinkClick}>E-Mail : mail@gmail.com</a>
                    <p>До нас звернулось: {this.state.peoples}</p>
                </div>
            </div>
        )
    }
}

export default AppInfo