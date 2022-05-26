import { Component } from 'react'

import './css/Toolbar.css'

class Toolbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'name'
        }
    }

    onChangeSelect = (event) => {
        this.setState({ value: event.target.value })
        this.props.sortData(event.target.value)
    }

    render() {
        const { value } = this.state

        return (
            <div className="toolbar">
                <button
                    onClick={this.props.onClickAddElem}
                    className='add-btn'>Додати елемент &gt;&gt;
                </button>
                <select
                    value={value}
                    className='sort-list'
                    name="sort"
                    onChange={this.onChangeSelect}
                >
                    <option value='name'>Назва</option>
                    <option value='price'>Ціна</option>
                    <option value='diameter'>Діаметр</option>
                    <option value='height'>Довжина</option>
                    <option value='tooth'>Кількість ріжучик кромок</option>
                </select>
                <button onClick={() => this.props.sortData(value)} className='sort-btn'>⇅</button>
            </div>
        )
    }
}

export default Toolbar