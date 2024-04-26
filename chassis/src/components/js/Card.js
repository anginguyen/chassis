import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../helpers/cartUtils';
import styles from '../css/Card.module.css';
import Stepper from './Stepper'
import Rectangle36 from '../../img/Rectangle 36.png'

function Card({ item, addItem }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('ADD TO CART'); // New state for button text
  const [buttonStyle, setButtonStyle] = useState('red-outline-btn'); // New state for button style

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart(event) {
    event.stopPropagation();
    addToCart(item, quantity);
    setIsLoading(true);

    item["quantity"] = quantity;
    addItem(item);

    setButtonText('ITEM ADDED');
    setButtonStyle('green-complete-button'); // Switch to green button style
         // Change button text

        setTimeout(() => {
            setIsLoading(false);
            setButtonStyle('red-outline-btn'); // Revert to original style
            setButtonText('ADD TO CART'); // Revert text after 1 second
        }, 1000); // Delay for reverting back
  }

  function handleBuyNow(event) {
    event.stopPropagation();
    addToCart(item, quantity);
    navigate('/shop/checkout');
  }

  return (
      <div className={styles.card} onClick={() => navigate(`/shop/product/${item.id}`)}>
        <img src={Rectangle36} className={styles.image} alt={item.name} />
        {/* <img src={item.img} className={styles.image} alt={item.name} /> */}
        <div className={styles.name}>
          {item.name}
        </div>
        <div className={styles.delivery}>Delivery in 1-2 days</div>
        
        <div className={styles.split}>
          <div className={styles.price}>${item.price}</div>
          <Stepper quantity={quantity} increment={increment} decrement={decrement} />
        </div>
        
        <div className={styles.buttonContainer}>
          <button className={`button dark-btn small-btn ${styles.buyNow}`} onClick={(event) => handleBuyNow(event)}>BUY NOW</button>
          <button
                    className={`button ${buttonStyle} small-btn ${styles.addToCart}`}
                    onClick={handleAddToCart}
                >
                    {buttonText}
          </button>
        </div>
      </div>
  );
}

export default Card;
