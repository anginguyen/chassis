import { useState, useEffect } from 'react'
import { incrementQuantity, decrementQuantity, deleteFromCart } from '../../helpers/cartUtils';
import Stepper from './Stepper'
import styles from '../css/CheckoutItem.module.css'
import x_icon from '../../img/x-icon--grey.svg'
import Rectangle36 from '../../img/Rectangle 36.png'

function CheckoutItem({ item, update }) {
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

    function deleteItem() {
        deleteFromCart(item);
        update();
    }

    return (
        <div className={styles.item}>
            <img src={Rectangle36} className={item.img} />

            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.row}>
                        <p className={styles.title}>{item.name}</p>
                        <button onClick={deleteItem}><img src={x_icon} alt="X icon" /></button>
                    </div>

                    <p className={styles.subtitle}>Part #123-123</p>
                </div>

                <div className={styles.price}>${item.price}</div>

                <div className={styles.bottom}>
                    <p className={styles.subtitle}>Estimated Delivery: May 6, 2024</p>

                    <div className={styles.quantity}>
                        <p className={styles.subtitle}>Qty</p>
                        <Stepper quantity={item.quantity} increment={increment} decrement={decrement} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;