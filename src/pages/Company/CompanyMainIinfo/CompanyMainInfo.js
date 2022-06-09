import { Component } from 'react'
import CompanyServices from '../../../services/CompanyServices'
import EmployeeCard from './EmployeeCard'
import Spinner from '../../../components/Spinner/Spinner'

import './css/CompanyMainInfo.css'

const companyService = new CompanyServices()

class CompanyMainInfo extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        companyService.getAllEmployees().then(data => {
            this.setState({ data, loading: false })
        })
    }

    render() {
        const { data, loading } = this.state

        const elements = data.map(employee => {
            const { id, name, thumbnail, description, urls } = employee
            return (
                <li className='employee-card'
                    key={id}>
                    <EmployeeCard
                        name={name}
                        image={thumbnail}
                        description={description}
                        url={{ urls }} />
                </li>
            )
        })

        return (
            <div className='company-main-info'>
                <h2>Наші співробітники</h2>
                {loading ? <Spinner /> : elements}
            </div>
        )
    }
}

export default CompanyMainInfo