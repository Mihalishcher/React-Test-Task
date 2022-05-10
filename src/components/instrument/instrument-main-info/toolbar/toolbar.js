import './toolbar.css'

const Toolbar = ({ onAdd }) => {
    return (
        <div className="toolbar">
            <button onClick={onAdd} className='add-btn'>Додати елемент &gt;&gt; </button>
            <button className='sort-btn'>Сортувати</button>
            <select className='sort-list' name="sort">
                <option value='1'>Назва</option>
                <option value='2'>Ціна</option>
                <option value='3'>Діаметр</option>
                <option value='4'>Довжина</option>
                <option value='5'>Кількість ріжучик кромок</option>
            </select>
        </div>
    )
}

export default Toolbar