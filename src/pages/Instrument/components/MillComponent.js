import PropTypes from 'prop-types';
import Images from '../../../assets/Images';

import '../css/MillComponent.css';

function MillComponent({
  name, price, property, onDelete
}) {
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
          Діаметер інструменту:
          {' '}
          {property.diameter}
          {' '}
          мм
        </p>
        <p>
          Довжина інструменту:
          {' '}
          {property.height}
          {' '}
          мм
        </p>
        <p>
          Кількість ріжучіх кромок:
          {' '}
          {property.tooth}
          {' '}
          шт
        </p>
      </div>

      <div className="mill-price">
        <p>
          Ціна:
          {' '}
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
}

MillComponent.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  property: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MillComponent;
