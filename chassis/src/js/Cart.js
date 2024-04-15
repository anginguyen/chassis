import CartItem from "../components/js/CartItem"
import styles from "../css/Cart.module.css"

function Cart({items}) {
    return (
        <div className={styles.cart}>
            <div className={styles.top}>
                <p className={styles.title}>Your Shopping Cart</p>
                <button className={styles.title}>X</button>
            </div>

            <div className={styles.items}>
                {items.map((item) =>
                    <CartItem item={item} />
                )}
            </div>
        </div>
    )
}

export default Cart;