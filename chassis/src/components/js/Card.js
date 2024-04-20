import { useState } from 'react';
import { addToCart } from '../../helpers/cartUtils';
import styles from '../css/Card.module.css';
import Stepper from './Stepper'

function Card({ item }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={styles.card}>
      <img src={item.img} className={styles.image} />
      {/* <p className={styles.product_name}>{name}</p> */}
      
      <div className={styles.name}>{item.name}</div>
      <div className={styles.delivery}>Delivery in 1-2 days</div>
      
      <div className={styles.split}>
        <div className={styles.price}>${item.price}</div>
        <div className={styles.quantity}></div>
        <Stepper quantity={quantity} increment={increment} decrement={decrement} />
      </div>
        {/*
        <div className={styles.quantity_box}> 
        </div>
          */}
      <div className={styles.buttonContainer}>
        <button className={styles.buyNow}>BUY NOW</button>
        <button className={styles.addToCart} onClick={() => addToCart(item, quantity)}>ADD TO CART</button>

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
