import MillLogo from "../../../../img/mill.jpg"
import DeleteLogo from "../../../../img/delete.png"
import './mill-component.css'

const MillComponent = ({ name = "No name", price = 0, property, onDelete }) => {

    return (
        <div className="mill-comp">
            <div>
                <img className="mill-photo" src={MillLogo} alt="mill-logo" />
            </div>
            <div className="mill-property">
                <p>{name}</p><br />
                <p>Діаметер інструменту: {property.diameter}</p>
                <p>Довжина інструменту: {property.height} мм</p>
                <p>Кількість ріжучіх кромок:  {property.tooth} зуба</p>
            </div>
            <div className="mill-price">
                <p>Ціна: {price}$</p>
            </div>
            <img src={DeleteLogo} className="delete-logo" onClick={onDelete} alt="delete-logo" />
        </div>
    )
}

export default MillComponent