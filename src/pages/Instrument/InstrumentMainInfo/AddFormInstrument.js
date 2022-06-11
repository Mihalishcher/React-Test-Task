import { Component } from 'react';
import PropTypes from 'prop-types';

import './css/AddFormInstrument.css';

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

    let className = 'add-form-instrument';
    if (visible) {
      className += ' visible';
    }

    const inputs = [
      {
        label: 'Назва інструменту:', type: 'text', prop: 'name', stateValue: name, id: 1
      },
      {
        label: 'Діаметер інструменту:', type: 'number', prop: 'diameter', stateValue: diameter, id: 2
      },
      {
        label: 'Довжина інструменту:', type: 'number', prop: 'height', stateValue: height, id: 3
      },
      {
        label: 'Кількість ріжучих кромок:', type: 'number', prop: 'tooth', stateValue: tooth, id: 4
      },
      {
        label: 'Ціна ($):', type: 'number', prop: 'price', stateValue: price, id: 5
      },
    ];

    const inputElements = inputs.map(({
      label, type, prop, stateValue, id
    }) => {
      return (
        <div key={id}>
          <label htmlFor={prop}>{label}</label>
          <input
            type={type}
            id={prop}
            onChange={this.onValueChange}
            name={prop}
            value={stateValue}
          />
        </div>
      );
    });

    return (
      <div className={className}>
        <form onSubmit={this.onSubmit}>
          {inputElements}
          <button className="add-btn" type="submit">Додати елемент</button>
        </form>
      </div>
    );
  }
}

AddFormInstrument.propTypes = {
  visible: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddFormInstrument;
