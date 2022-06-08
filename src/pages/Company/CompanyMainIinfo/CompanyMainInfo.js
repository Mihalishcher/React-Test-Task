import { Component } from 'react'
import CompanyServices from '../../../services/CompanyServices'
import EmployeeCard from './EmployeeCard'

import './css/CompanyMainInfo.css'

const companyService = new CompanyServices()

class CompanyMainInfo extends Component {
    state = {
        data: []
    }

    cheakCharacter = (char) => {
        const noImage = 'image_not_available'
        return (char.description.length > 1 && !char.thumbnail.path.includes(noImage))
    }

    componentDidMount() {
        companyService.getAllEmployees().then(res => {
            const allChars = res.data.data.results
            const numberOfEmployees = 12
            let employeesList = []
            allChars.forEach(char => {
                if (this.cheakCharacter(char) && employeesList.length < numberOfEmployees) {
                    employeesList.push(char)
                }
            });
            this.setState({
                data: employeesList
            })
        })
    }

    render() {
        const { data } = this.state

        const elements = data.map(item => {
            const { id, name, thumbnail, description, urls } = item
            return (
                <li
                    className='employee-card'
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
                {elements}
            </div>
        )
    }
}

export default CompanyMainInfo