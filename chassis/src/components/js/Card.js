import styles from '../css/Card.module.css'

function Card({ img, name, price }) {
    return (
        <div className={styles.card}>
            <img src={img} />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default Card;