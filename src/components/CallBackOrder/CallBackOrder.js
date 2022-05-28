import { Component } from 'react'

import './CallBackOrder.css'

class CallBackOrder extends Component {
    state = {
        phoneNumber: '',
        visibility: false,
        counter: 30
    }

    showCallOrderForm = () => {
        setTimeout(() => {
            this.setState({ visibility: true })
        }, 5000);
    }

    enteredPhone = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    callOrdered = (e) => {
        this.interval = setInterval(() => {
            if (this.state.counter > 0) {
                this.setState(({ counter: this.state.counter - 1 }))
            }
        }, 1000);
        this.setState({ phoneNumber: '' })
        e.target.disabled = true
    }

    componentDidMount() {
        this.showCallOrderForm()
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { counter, visibility, phoneNumber } = this.state

        let classCallOrder = "call-back-order"
        if (visibility) {
            classCallOrder += ' visible'
        }

        return (
            <div className={classCallOrder}>
                <p>Ми Вам передзвонимо через <span>{counter}</span>  секунд</p>
                <input
                    type="number"
                    placeholder='+380'
                    onChange={this.enteredPhone}
                    name='phoneNumber'
                    value={phoneNumber} />
                <button onClick={this.callOrdered} className='btn-sub'>Замовити</button>
            </div>
        )
    }
}

export default CallBackOrder