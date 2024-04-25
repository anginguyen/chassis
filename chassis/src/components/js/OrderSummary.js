import CartItem from "./CartItem";
import styles from "../css/OrderSummary.module.css"
import Rectangle36 from '../../img/Rectangle 36.png'

const items = [
    {
        id: 1,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 2,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 3,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 4,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 5,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 6,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
]

function OrderSummary({ order }) {
    return (
        <div className={styles.summary}>
            <div className={styles.top}>
                <p className={styles.title}>Order Summary</p>

                <div className={styles.items}>
                    {items.map((item) =>
                        <CartItem item={item} added={true} />
                    )}
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.details}>
                    <div className={styles.detailsection}>
                        <div className={styles.detailline}>
                            <p className={styles.detailname}>Subtotal ({items.length} {items.length == 1 ? "item" : "items"})</p>
                            <p className={styles.price}>$100.00</p>
                        </div>
                    </div>

                    <div className={styles.detailsection}>
                        <div className={styles.detailline}>
                            <p className={styles.detailname}>Estimated Shipping</p>
                            <p className={styles.price}>$2.00</p>
                        </div>
                    </div>

                    <div className={styles.detailsection}>
                        <div className={styles.detailline}>
                            <p className={styles.detailname}>Fees & Estimated Tax</p>
                            <p className={styles.price}>$11.45</p>
                        </div>
                        <div className={styles.detailmore}>
                            <p>Transaction fee</p>
                            <p>Estimated tax (CA)</p>
                        </div>
                    </div>
                </div>

                <div className={styles.total}>
                    <p className={styles.totaltext}>Total</p>
                    <p className={styles.totalprice}>$113.45</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;