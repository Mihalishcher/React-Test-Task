import { Component } from 'react'

import './Toolbar.css'

class Toolbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'name'
        }
    }

    onChangeSelect = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        const { value } = this.state

        return (
            <div className="toolbar">
                <button onClick={this.props.onClickAdd} className='add-btn'>Додати елемент &gt;&gt; </button>
                <button onClick={() => this.props.sortData(value)} className='sort-btn'>Сортувати</button>
                <select
                    value={this.state.value}
                    className='sort-list'
                    name="sort"
                    onChange={this.onChangeSelect}
                >
                    <option value='name'>Назва ⇅</option>
                    <option value='price'>Ціна ⇅</option>
                    <option value='diameter'>Діаметр ⇅</option>
                    <option value='height'>Довжина ⇅</option>
                    <option value='tooth'>Кількість ріжучик кромок ⇅</option>
                </select>
            </div>
        )
    }
}

export default Toolbar