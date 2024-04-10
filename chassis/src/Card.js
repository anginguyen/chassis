import './Card.css'

function Card({ img, name, price }) {
    return (
        <div className="card">
            <img src={img} />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default Card;