
function Card(props) {
    return (
        <div className="card">
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