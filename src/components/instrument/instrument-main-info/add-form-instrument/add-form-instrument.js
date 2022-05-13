import { Component } from 'react'

import './add-form-instrument.css'

class AddFormInstrument extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            diameter: '',
            height: '',
            tooth: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onAdd(this.state)
        this.setState({
            name: '',
            price: '',
            diameter: '',
            height: '',
            tooth: ''
        })
    }

    render() {
        const { name, price, diameter, height, tooth } = this.state
        const visible = this.props.visible

        let className = "add-form-instrument"
        if (visible) {
            className += " visible"
        }

        return (
            <div className={className}>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Назва інструменту:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Маркування"
                            onChange={this.onValueChange}
                            name='name'
                            value={name}
                        />
                        <label htmlFor="diameter">Діаметер інструменту:</label>
                        <input
                            type="number"
                            id="diameter"
                            placeholder='0 мм'
                            onChange={this.onValueChange}
                            name='diameter'
                            value={diameter}
                        />
                    </div>
                    <div>
                        <label htmlFor="height">Довжина інструменту:</label>
                        <input
                            type="number"
                            id="height"
                            placeholder='0 мм'
                            onChange={this.onValueChange}
                            name='height'
                            value={height}
                        />
                        <label htmlFor="price">Ціна ($):</label>
                        <input
                            type="number"
                            id="price"
                            placeholder='0 $'
                            onChange={this.onValueChange}
                            name='price'
                            value={price}
                        />
                    </div>
                    <label htmlFor="tooth">Кількість ріжучих кромок:</label>
                    <input
                        type="number"
                        id="tooth"
                        placeholder='0 шт'
                        onChange={this.onValueChange}
                        name='tooth'
                        value={tooth}
                    />
                    <button className='add-btn' type='submit'>Додати елемент</button>
                </form>
            </div>
        )
    }
}

export default AddFormInstrument