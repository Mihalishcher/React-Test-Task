import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../../store/employessList/actions';

import Spinner from '../../components/Spinner/Spinner';
import EmployeeCard from './components/EmployeeCard';

import './css/CompanyMainInfoView.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const CompanyInfoView = () => {
  const dispatch = useDispatch();
  const {
    data, loading, error, sort
  } = useSelector((state) => state.employeesList);

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
  const { t } = useTranslation();
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = errorMessage || spinner;

  return (
    <div className="company-main-info">
      <button
        className="btn-reload"
        disabled={error || loading}
        type="button"
        onClick={() => dispatch(sortBy((sort ? '' : '-name')))}
      >
        {t('company.reload')}
      </button>
      <h2>{t('company.employees')}</h2>
      {content}
      {elements}
    </div>
  );
};

export default CompanyInfoView;
