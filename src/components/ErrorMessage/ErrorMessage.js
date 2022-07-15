import Images from '../../assets/Images';

import './css/ErrorMessage.css';

const ErrorMessage = () => {
  return (
    <img
      className="error-message"
      src={Images.error}
      alt="Error"
    />
  );
};

export default ErrorMessage;
