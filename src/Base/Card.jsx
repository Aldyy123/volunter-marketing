
function Card(props) {
    return (
        <div className="card" data-aos='fade-up' data-aos-duration='2500'>
            <div className="card-header">
                <img src={props.img} alt="Logo" />
            </div>
            <div className="card-text">
                <h3>Chandra</h3>
                <p>Scale bisnis</p>
            </div>
        </div>
    )
}

export default Card;