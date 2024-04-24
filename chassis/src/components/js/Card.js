import { useState } from 'react';
import { addToCart } from '../../helpers/cartUtils';
import styles from '../css/Card.module.css';
import Stepper from './Stepper'
import { Link } from 'react-router-dom';

function Card({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {
    setIsLoading(true);
    // Simulate a network request with setTimeout
    setTimeout(() => {
      addToCart(item, quantity);
      setIsLoading(false);
    }, 1000);  // Adjust time as needed
  }

  return (
    <div className={styles.card}>
      <img src={item.img} className={styles.image} alt={item.name} />
      <div className={styles.name}>
        <Link to={`/product/${item.id}`}>{item.name}</Link>
      </div>
      <div className={styles.delivery}>Delivery in 1-2 days</div>
      
      <div className={styles.split}>
        <div className={styles.price}>${item.price}</div>
        <Stepper quantity={quantity} increment={increment} decrement={decrement} />
      </div>
      
      <div className={styles.buttonContainer}>
        <button className={styles.buyNow}>BUY NOW</button>
        <button
          className={isHovering ? `${styles.addToCart} ${styles.hover}` : styles.addToCart}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? 'LOADING...' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  );
}

export default Card;
