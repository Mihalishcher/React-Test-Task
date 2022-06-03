import Images from '../../../components/Resources/Images'

import './css/MillComponent.css'

const MillComponent = ({ name, price, property, onDelete }) => {

    return (
        <>
            <img
                className="mill-photo"
                src={Images.millLogo}
                alt="mill-logo"
                // onLoad={() => console.log('loaded')}
                onError={() => console.log('error loading image')}
            />

            <div className="mill-property">
                <p>{name}</p><br />
                <p>Діаметер інструменту: {property.diameter}</p>
                <p>Довжина інструменту: {property.height} мм</p>
                <p>Кількість ріжучіх кромок:  {property.tooth} шт</p>
            </div>

            <div className="mill-price">
                <p>Ціна: {price}$</p>
            </div>

            <img
                className="delete-logo"
                src={Images.deleteLogo}
                onClick={onDelete}
                alt="delete-logo"
                // onLoad={() => console.log('loaded')}
                onError={() => console.log('error loading image')}
            />
        </>


    )
}

export default MillComponent