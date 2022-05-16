import Images from '../../../../components/Images/Images'

import './MillComponent.css'

const MillComponent = ({ name, price, property, onDelete }) => {

    return (
        <div className="mill-comp">
            <div>
                <img className="mill-photo" src={Images.millLogo} alt="mill-logo" />
            </div>
            <div className="mill-property">
                <p>{name}</p><br />
                <p>Діаметер інструменту: {property.diameter}</p>
                <p>Довжина інструменту: {property.height} мм</p>
                <p>Кількість ріжучіх кромок:  {property.tooth} шт</p>
            </div>
            <div className="mill-price">
                <p>Ціна: {price}$</p>
            </div>
            <img src={Images.deleteLogo} className="delete-logo" onClick={onDelete} alt="delete-logo" />
        </div>
    )
}

export default MillComponent