import Header from "../components/js/Header"
import OrderSummary from "../components/js/OrderSummary"
import styles from "../css/OrderDetails.module.css"

function OrderDetails({ order }) {
    return (
        <div className="container">
            <Header title="Your Orders" hasSearch={false} />

            <div className={styles.summary}>
                <OrderSummary />
            </div>
        </div>
    )
}

export default OrderDetails;