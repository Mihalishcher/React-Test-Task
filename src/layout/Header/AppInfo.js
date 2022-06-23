import Images from '../../assets/Images';

import './css/AppInfo.css';

function AppInfo() {
  return (
    <div className="head">
      <img className="app-logo" src={Images.logoAsTec} alt="Company logo" />
      <div className="contact-info">
        <a href="tel:+380661234567">Tel: +38 066-123-45-67</a>
        <br />
        <a href="mailto:mail@gmail.com">E-Mail : mail@gmail.com</a>
      </div>
    </div>
  );
}

export default AppInfo;
