import './css/EmployeeCard.css'

const EmployeeCard = ({ name, image, description, url }) => {
    const urlWiki = url.urls[0].url

    return (
        <>
            <img className='employee-photo' src={image.path + '.' + image.extension} alt="Employee" />
            <div className='employee-info'>
                <div className='employee-name'><h3><a href={urlWiki} target='_blank' rel="noreferrer">{name}</a></h3></div>
                <div className='employee-description'>{description}</div>
            </div>

        </>


    )
}

export default EmployeeCard