import styles from '../css/OrderCard.module.css'
import Rectangle36 from '../../img/Rectangle 36.png'

function OrderCard({order}) {
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <img src={Rectangle36} alt="ordered part" className={styles.img} />

                <div className={styles.info}>
                    <p className={styles.orderNumber}>Order #182940529</p>
                    <p className={styles.orderDate}>Apr 24, 2024</p>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.status}>
                    <p className={`${styles.orderStatus} ${styles.processing}`}>Processing</p>
                    <p className={styles.deliveryDate}>by 10:00pm</p>
                </div>

                <a className={styles.details}>View Order Details</a>
            </div>

            {/* <h2>{order.status}</h2>
            <h3>Ordered on {order.created_at}</h3>

            {(order.parts_ordered).map((part) => 
                <div className="order-info" key={part.id}>
                    <p>{part.car_parts.name}</p>
                    <p>Quantity: {part.quantity}</p>
                </div>
            )} */}
        </div>
    )
}

export default OrderCard;