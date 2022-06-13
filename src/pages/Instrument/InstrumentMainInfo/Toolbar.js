import PropTypes from 'prop-types';

import './css/Toolbar.css';

function Toolbar(props) {
  const {
    onClickAddElem, sortData, onChangeSelect, toolbarSortSelect
  } = props;

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
        value={toolbarSortSelect}
        className="sort-list"
        name="sort"
        onChange={(e) => onChangeSelect(e)}
      >
        <option value="name">Назва</option>
        <option value="price">Ціна</option>
        <option value="diameter">Діаметр</option>
        <option value="height">Довжина</option>
        <option value="tooth">Кількість ріжучик кромок</option>
      </select>
      <button
        onClick={sortData}
        type="button"
        className="sort-btn"
      >
        ⇅
      </button>
    </div>
  );
}

Toolbar.propTypes = {
  sortData: PropTypes.func.isRequired,
  onClickAddElem: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  toolbarSortSelect: PropTypes.string.isRequired
};

export default Toolbar;
