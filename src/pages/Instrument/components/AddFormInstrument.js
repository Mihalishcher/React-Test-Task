import { Component } from 'react';
import PropTypes from 'prop-types';

import AddFormInstrumentView from './AddFormInstrumentView';

class AddFormInstrument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      diameter: '',
      height: '',
      tooth: ''
    };
  }

  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (event) => {
    const { onAdd } = this.props;
    event.preventDefault();
    onAdd(this.state);
    this.setState({
      name: '',
      price: '',
      diameter: '',
      height: '',
      tooth: ''
    });
  };

  render() {
    const {
      name, price, diameter, height, tooth
    } = this.state;
    const { visible } = this.props;

    const inputs = [
      {
        label: 'Назва інструменту: ', type: 'text', prop: 'name', stateValue: name
      },
      {
        label: 'Діаметер інструменту: ', type: 'number', prop: 'diameter', stateValue: diameter
      },
      {
        label: 'Довжина інструменту: ', type: 'number', prop: 'height', stateValue: height
      },
      {
        label: 'Кількість ріжучих кромок: ', type: 'number', prop: 'tooth', stateValue: tooth
      },
      {
        label: 'Ціна ($): ', type: 'number', prop: 'price', stateValue: price
      },
    ];

    return (
      <AddFormInstrumentView
        onSubmit={this.onSubmit}
        visible={visible}
        inputs={inputs}
        onValueChange={this.onValueChange}
      />
    );
  }
}

AddFormInstrument.propTypes = {
  visible: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddFormInstrument;
