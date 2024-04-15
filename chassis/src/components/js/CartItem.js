import styles from '../css/CartItem.module.css'
import Stepper from './Stepper'

function CartItem({item}) {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={item.img} alt={item.name} />

            <div className={styles.info}>
                <p className={styles.name}>{item.name}</p>

                <div className={styles['price-quantity']}>
                    <p className={styles.price}>{item.price}</p>
                    <Stepper quantity={item.quantity} />
                </div>
            </div>
        </div>
    )
}

export default CartItem;