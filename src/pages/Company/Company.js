import { useState, useEffect } from 'react';
import withLayout from '../../HOC/withLayout';

import useCompanyServices from '../../services/CompanyServices';
import CompanyMainInfoView from './CompanyView';

const CompanyMainInfo = () => {
  const [data, setData] = useState([]);
  const { getAllEmployees, loading, error } = useCompanyServices();

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setData(employeesArray);
    });
  }, []);

  return (
    <CompanyMainInfoView
      loading={loading}
      error={error}
      data={data}
    />
  );
};

export default withLayout(CompanyMainInfo);
