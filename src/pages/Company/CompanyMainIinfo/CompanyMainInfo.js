import { Component } from 'react';
import CompanyServices from '../../../services/CompanyServices';
import EmployeeCard from './EmployeeCard';
import CompanyMainInfoView from './CompanyMainInfoView';

import './css/CompanyMainInfo.css';

const companyService = new CompanyServices();

class CompanyMainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    companyService.getAllEmployees().then((data) => {
      this.setState({ data, loading: false });
    });
  }

  render() {
    const { data, loading } = this.state;

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
            url={{ urls }}
          />
        </li>
      );
    });

    return (
      <CompanyMainInfoView
        elements={elements}
        loading={loading}
      />
    );
  }
}

export default CompanyMainInfo;
