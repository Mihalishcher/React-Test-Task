import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/SideMenuItem.css';

function SideMenuItem({ logo, name, url }) {
  return (
    <li className="aside-div">
      <Link
        to={`/${url}`}
        className="link-logo"
      >
        <img
          src={logo}
          alt={name}
          /* eslint-disable */
          onLoad={() => console.log('loaded')}
          onError={() => console.log('error loading image')}
        /* eslint-enable */
        />
        {name}
      </Link>
    </li>
  );
}

SideMenuItem.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SideMenuItem;
