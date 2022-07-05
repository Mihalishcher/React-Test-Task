import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Images from '../../../assets/Images';

import '../css/MillComponent.css';

const MillComponent = ({
  name, price, property, onDelete
}) => {
  const { t } = useTranslation();
  return (
    <>
      <img
        className="mill-photo"
        src={Images.millLogo}
        alt="mill-logo"
      />

      <div className="mill-property">
        <p>{name}</p>
        <br />
        <p>
          {t('instrument.diameter')}
          {': '}
          {property.diameter}
          {' '}
          {t('instrument.milimetres')}
        </p>
        <p>
          {t('instrument.height')}
          {': '}
          {property.height}
          {' '}
          {t('instrument.milimetres')}
        </p>
        <p>
          {t('instrument.tooth')}
          {': '}
          {property.tooth}
          {' '}
          {t('instrument.pieces')}
        </p>
      </div>

      <div className="mill-price">
        <p>
          {t('instrument.price')}
          {': '}
          {price}
          $
        </p>
      </div>

      <div
        onClick={onDelete}
        role="presentation"
      >
        <img
          className="delete-logo"
          src={Images.deleteLogo}
          alt="delete-logo"
        />
      </div>
    </>
  );
};

MillComponent.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  property: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MillComponent;
