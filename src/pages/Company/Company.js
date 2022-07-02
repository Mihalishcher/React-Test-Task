import { useState, useEffect } from 'react';

import useCompanyServices from '../../services/CompanyServices';
import CompanyMainInfoView from './CompanyView';
import Layout from '../../layout/Layout';

function CompanyMainInfo() {
  const [data, setData] = useState([]);
  const { getAllEmployees, loading, error } = useCompanyServices();

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setData(employeesArray);
    });
  }, []);

  return (
    <Layout>
      <CompanyMainInfoView
        loading={loading}
        error={error}
        data={data}
      />
    </Layout>
  );
}

export default CompanyMainInfo;
