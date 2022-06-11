import { Component } from 'react';

import './CallBackOrder.css';

class CallBackOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      visibility: false,
      counter: 30
    };
  }

  componentDidMount() {
    this.showCallOrderForm();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showCallOrderForm = () => {
    setTimeout(() => {
      this.setState({ visibility: true });
    }, 5000);
  };

  enteredPhone = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  callOrdered = (e) => {
    const { counter } = this.state;
    this.interval = setInterval(() => {
      if (counter > 0) {
        this.setState(({ counter: counter - 1 }));
      }
    }, 1000);
    this.setState({ phoneNumber: '' });
    e.target.disabled = true;
  };

  closeWindow = () => {
    this.setState({ visibility: false });
  };

  render() {
    const { counter, visibility, phoneNumber } = this.state;

    let classCallOrder = 'call-back-order';
    if (visibility) {
      classCallOrder += ' visible';
    }

    return (
      <div className={classCallOrder}>
        <p>
          Ми Вам передзвонимо через
          <span>{counter}</span>
          {' '}
          секунд
        </p>
        <input
          className="input-phone"
          type="tel"
          placeholder="+380"
          onChange={this.enteredPhone}
          name="phoneNumber"
          value={phoneNumber}
        />
        <div className="btn-group">
          <button onClick={this.callOrdered} type="button" className="btn-sub">Замовити</button>
          <button onClick={this.closeWindow} type="button" className="btn-sub">Закрити</button>
        </div>

      </div>
    );
  }
}

export default CallBackOrder;
