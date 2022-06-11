import { Component } from 'react';
import PropTypes from 'prop-types';

import './css/Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'name',
    };
  }

  onChangeSelect = (event) => {
    const { sortData } = this.props;
    this.setState({ value: event.target.value });
    sortData(event.target.value);
  };

  render() {
    const { value } = this.state;
    const { onClickAddElem, sortData } = this.props;

    return (
      <div className="toolbar">
        <button
          onClick={onClickAddElem}
          type="button"
          className="add-btn"
        >
          Додати елемент &gt;&gt;
        </button>
        <select
          value={value}
          className="sort-list"
          name="sort"
          onChange={this.onChangeSelect}
        >
          <option value="name">Назва</option>
          <option value="price">Ціна</option>
          <option value="diameter">Діаметр</option>
          <option value="height">Довжина</option>
          <option value="tooth">Кількість ріжучик кромок</option>
        </select>
        <button
          onClick={() => sortData(value)}
          type="button"
          className="sort-btn"
        >
          ⇅
        </button>
      </div>
    );
  }
}

Toolbar.propTypes = {
  sortData: PropTypes.func.isRequired,
  onClickAddElem: PropTypes.func.isRequired
};

export default Toolbar;
