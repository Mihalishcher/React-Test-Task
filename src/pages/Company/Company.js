import { useState, useEffect } from 'react';
import withLayout from '../../HOC/withLayout';

import useCompanyServices from '../../services/CompanyServices';
import CompanyInfoView from './CompanyView';

const CompanyInfo = () => {
  const [data, setData] = useState([]);
  const { getAllEmployees, loading, error } = useCompanyServices();

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setData(employeesArray);
    });
  }, []);

  return (
    <CompanyInfoView
      loading={loading}
      error={error}
      data={data}
    />
  );
};

export default withLayout(CompanyInfo);
