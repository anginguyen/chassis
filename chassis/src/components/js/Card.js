import styles from '../css/Card.module.css';
import Stepper from './Stepper'

function Card({ img, name, price, quantity }) {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.image} />
      {/* <p className={styles.product_name}>{name}</p> */}
      
      <div className={styles.name}>{name}</div>
      <div className={styles.delivery}>Delivery in 1-2 days</div>
      
      <div className={styles.split}>
        <div className={styles.price}>${price}</div>
        <div className={styles.quantity}></div>
        <Stepper quantity={quantity} />
      </div>
        {/*
        <div className={styles.quantity_box}> 
        </div>
          */}
      <div className={styles.buttonContainer}>
        <button className={styles.buyNow}>BUY NOW</button>
        <button className={styles.addToCart}>ADD TO CART</button>

        {/*
        <button className={styles.buyNow} onClick={() => console.log('Purchasing item...')} aria-label="Buy this item now">
        Buy Now
        </button>
        <button className={styles.addToCart} onClick={() => console.log('Adding to cart...')} aria-label="Add this item to cart">
        Add to Cart
        </button>
        */}
        </div>
    </div>
  );
}

export default Card;
