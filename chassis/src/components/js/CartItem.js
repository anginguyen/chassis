import { useState, useEffect } from 'react';
import { incrementQuantity, decrementQuantity, deleteFromCart } from '../../helpers/cartUtils';
import styles from '../css/CartItem.module.css'
import Stepper from './Stepper'

function CartItem({ item, update, added }) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item]);

    function increment() {
        incrementQuantity(item.id);
        setQuantity(quantity + 1);
        update();
    }

    function decrement() {
        if (quantity === 1) {
            deleteFromCart(item);
        }
        else {
            decrementQuantity(item.id);
            setQuantity(quantity - 1);
        }
        update();
    }

    return (
        <div className={styles.item}>
            <img className={styles.img} src={item.img} alt={item.name} />

            <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>


                {added ? 
                    <div className={styles['price-quantity']}>
                        <p className={styles.quantity}>QTY: {quantity}</p>
                        <p className={styles.price}>${item.price}</p>
                    </div> 
                : 
                    <div className={styles['price-quantity']}>
                        <p className={styles.price}>${item.price}</p>
                        <Stepper quantity={quantity} increment={increment} decrement={decrement} />
                    </div>
                }
            </div>
        </div>
    )
}

export default CartItem;