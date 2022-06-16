import { Component } from 'react';
import CompanyServices from '../../../services/CompanyServices';
import CompanyMainInfoView from './CompanyMainInfoView';

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

    return (
      <CompanyMainInfoView
        loading={loading}
        data={data}
      />
    );
  }
}

export default CompanyMainInfo;
