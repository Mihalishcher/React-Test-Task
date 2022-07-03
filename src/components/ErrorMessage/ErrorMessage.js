import PropTypes from 'prop-types';
import Images from '../../assets/Images';

import './css/ErrorMessage.css';

const ErrorMessage = ({ error }) => {
  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <img
      className="error-message"
      src={Images.error}
      alt="Error"
    />
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;
