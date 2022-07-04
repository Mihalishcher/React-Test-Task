import PropTypes from 'prop-types';

import '../css/EmployeeCard.css';

const EmployeeCard = ({
  name, image, description, urlWiki
}) => (
  <>
    <img className="employee-photo" src={`${image.path}.${image.extension}`} alt="Employee" />
    <div className="employee-info">
      <div className="employee-name">
        <h3><a href={urlWiki} target="_blank" rel="noreferrer">{name}</a></h3>
      </div>
      <div className="employee-description">{description}</div>
    </div>

  </>
);

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  urlWiki: PropTypes.string.isRequired
};

export default EmployeeCard;
