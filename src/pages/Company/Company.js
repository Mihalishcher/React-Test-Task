import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../store/employessList/actions';
import withLayout from '../../HOC/withLayout';

import useCompanyServices from '../../services/CompanyServices';
import CompanyInfoView from './CompanyView';

const CompanyInfo = () => {
  const sort = useSelector((state) => state.employeesList.sort);
  const dispatch = useDispatch();
  const { getAllEmployees } = useCompanyServices();

  useEffect(() => {
    getAllEmployees(sort).then((employeesArray) => {
      dispatch(getEmployees(employeesArray));
    });
  }, [sort]);

  return (
    <CompanyInfoView />
  );
};

export default withLayout(CompanyInfo);
