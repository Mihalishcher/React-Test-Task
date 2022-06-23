import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner/Spinner';
import EmployeeCard from './components/EmployeeCard';

import './css/CompanyMainInfoView.css';

function CompanyMainInfoView({
  loading, data
}) {
  const elements = data.map((employee) => {
    const {
      id, name, thumbnail, description, urls
    } = employee;
    return (
      <li
        className="employee-card"
        key={id}
      >
        <EmployeeCard
          name={name}
          image={thumbnail}
          description={description}
          urlWiki={urls[0].url}
        />
      </li>
    );
  });

  return (
    <div className="company-main-info">
      <h2>Наші співробітники</h2>
      {loading ? <Spinner /> : elements}
    </div>
  );
}

CompanyMainInfoView.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.objectOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    ])
  )).isRequired
};

export default CompanyMainInfoView;
