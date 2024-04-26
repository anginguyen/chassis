import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../helpers/cartUtils';
import Stepper from './Stepper'
import styles from '../css/Card.module.css';
import Rectangle36 from '../../img/Rectangle 36.png'

function Card({ item, addItem }) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
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

    function updateQuantity(value) {
        setQuantity(value);
    }

    function handleAddToCart(event) {
        event.stopPropagation();
        item["quantity"] = quantity;
        addItem(item);
        addToCart(item, quantity);

        setButtonText('ITEM ADDED'); // Change button text
        setButtonStyle('green-complete-button'); // Switch to green button style
    }

    function handleBuyNow(event) {
        event.stopPropagation();
        addToCart(item, quantity);
        navigate('/shop/checkout');
    }

    return (
        <div className={styles.card} onClick={() => navigate(`/shop/product/${item.id}`)}>
            <img src={Rectangle36} className={styles.image} alt={item.parts.name} />
            {/* <img src={item.img} className={styles.image} alt={item.name} /> */}
            <div className={styles.name}>
                {item.parts.name}
            </div>
            <div className={styles.delivery}>From {item.vendors.name}</div>
            
            <div className={styles.split}>
                <div className={styles.price}>${item.price}</div>
                <Stepper quantity={quantity} increment={increment} decrement={decrement} update={updateQuantity} />
            </div>
            
            <div className={styles.buttonContainer}>
              <button className={`button dark-btn small-btn ${styles.buyNow}`} onClick={handleBuyNow}>BUY NOW</button>
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
