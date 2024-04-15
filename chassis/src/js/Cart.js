import { animated } from '@react-spring/web'
import { useSpring } from '@react-spring/core'
import CartItem from "../components/js/CartItem"
import styles from "../css/Cart.module.css"
import x_icon from "../img/x-icon.svg"

function Cart({ items, isOpen, dismiss }) {
    const props = useSpring({ right: isOpen ? '0%' : '-30%'})

    return (
        <animated.div className={styles.cart} style={props}>
            <div className={styles.top}>
                <div className={styles['top-row']}>
                    <p className={styles.title}>Your Shopping Cart</p>
                    <button className={styles.title}><img src={x_icon} alt="X icon" onClick={dismiss}/></button>
                </div>

                <div className={styles.items}>
                    {items.map((item) =>
                        <CartItem item={item} />
                    )}
                </div>
            </div>

            <div className={styles.summary}>
                <p className={styles.subtitle}>Summary</p>
                
                <div className={styles.info}>
                    <div className={styles['info-item']}>
                        <p className={styles['info-name']}>Items</p>
                        <p className={styles['info-price']}>$100.00</p>
                    </div>

                    <div className={styles['info-item']}>
                        <p className={styles['info-name']}>Taxes</p>
                        <p className={styles['info-price']}>$2.00</p>
                    </div>

                    <div className={styles['info-item']}>
                        <p className={styles['info-name']}>Shipping</p>
                        <p className={styles['info-price']}>$2.67</p>
                    </div>
                </div>

                <div className={`${styles['info-item']} ${styles['total-box']}`}>
                    <p className={styles.total}>Total</p>
                    <p className={styles['total-price']}>$104.67</p>
                </div>

                <button className={styles.button}>CHECKOUT</button>
            </div>
        </animated.div>
    )
}

export default Cart;