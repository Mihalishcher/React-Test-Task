import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner/Spinner';
import EmployeeCard from './components/EmployeeCard';

import './css/CompanyMainInfoView.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const CompanyInfoView = ({
  loading, data, error
}) => {
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

  const errorMessage = error ? <ErrorMessage error={error} /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = errorMessage || spinner || elements;

  return (
    <div className="company-main-info">
      <h2>Наші співробітники</h2>
      {content}
    </div>
  );
};

CompanyInfoView.defaultProps = {
  data: [{
    id: 0,
    name: '',
    thumbnail: { path: '', extension: '' },
    description: '',
    urls: [{ url: '' }]
  }]
};

CompanyInfoView.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.objectOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    ])
  ))
};

export default CompanyInfoView;
