import styles from '../css/Card.module.css';

function Card({ img, name, price }) {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.price}>${price}</p>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.quantity_box}>
          <p className={styles.quantity_text}>+</p>
        </div>
      </div>
    </div>
  );
}

export default Card;