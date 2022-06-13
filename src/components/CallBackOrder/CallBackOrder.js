import { Component } from 'react';
import CallBackOrderView from './CallBackOrderView';

import './CallBackOrder.css';

class CallBackOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      visibility: false,
      counter: 30,
      disabledBtn: false
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  callOrdered = () => {
    this.interval = setInterval(() => {
      const { counter } = this.state;
      this.setState(() => {
        return {
          counter: counter > 0 ? counter - 1 : 0
        };
      });
    }, 1000);

    this.setState({ phoneNumber: '', disabledBtn: true });
  };

  closeWindow = () => {
    this.setState({ visibility: false });
    clearInterval(this.interval);
  };

  render() {
    const {
      counter, visibility, phoneNumber, disabledBtn
    } = this.state;

    return (
      <CallBackOrderView
        counter={counter}
        visibility={visibility}
        phoneNumber={phoneNumber}
        disabledBtn={disabledBtn}
        closeWindow={this.closeWindow}
        callOrdered={this.callOrdered}
        onChange={this.onChange}
      />
    );
  }
}

export default CallBackOrder;
