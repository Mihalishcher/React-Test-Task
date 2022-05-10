import { Component } from 'react'

import './add-form-instrument.css'

class AddFormInstrument extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }


    render() {
        let viz = this.props.visible
        console.log(viz)

        let className = "add-form-instrument"
        if (viz) {
            className += " visible"
        }

        return (
            <div className={className}>
                <form>
                    <div>
                        <label htmlFor="name">Назва інструменту:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="No name"
                        />
                        <label htmlFor="diameter">Діаметер інструменту:</label>
                        <input
                            type="number"
                            id="diameter"
                            placeholder='0'
                        />
                    </div>
                    <div>
                        <label htmlFor="height">Довжина інструменту:</label>
                        <input
                            type="number"
                            id="height"
                            placeholder='0'
                        />
                        <label htmlFor="price">Ціна ($):</label>
                        <input
                            type="number"
                            id="price"
                            placeholder='0'
                        />
                    </div>
                    <label htmlFor="tooth">Кількусть ріжучих кромок:</label>
                    <input
                        type="number"
                        id="tooth"
                        placeholder='0'
                    />
                    <button className='add-btn' type='submit'>Додати елемент</button>

                </form>
            </div>
        )
    }
}

export default AddFormInstrument