import Header from "../components/js/Header"
import OrderSummary from "../components/js/OrderSummary"
import CartItem from "../components/js/CartItem"
import styles from "../css/OrderDetails.module.css"
import Rectangle36 from '../img/Rectangle 36.png'
import { useNavigate } from 'react-router-dom'
import continueShoppingButton from '../css/Checkout.module.css'

const items = [
    {
        id: 1,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 2,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 3,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 4,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 5,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 6,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 7,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    },
    {
        id: 8,
        img: Rectangle36,
        price: "11.99",
        parts: {
            name: "ACDelco Iridium Spark Plug",
        },
        vendors: {
            name: "LQK",
            url: "google.com"
        },
    }
]

function OrderConfirmed({ order }) {
    const navigate = useNavigate();
    return (
        <div className="container">
            <Header title="Your Orders" hasSearch={false} />

            <div className={styles.detailscontainer}>
                <div className={styles.left}>
                    <div className={styles.statement}>
                        <div className={styles.header}>
                            <p className={`${styles.title} ${styles.better}`}>Order Confirmed</p>
                            <p className={styles.subheading}>Order #182940529</p>
                            <p className={styles.paragraph}>April 24, 2024</p>
                        </div>

                        <div className={styles.content}>
                            <div>
                                <p className={styles.heading}>Order Summary</p>

                                <div className={styles.total}>
                                    <p className={styles.subheading}>Total</p>
                                    <p className={styles.price}>$104.67</p>
                                </div>
                            </div>

                            <div>
                                <p className={styles.heading}>Order Details</p>

                                <div className={styles.details}>
                                    <div className={styles.row}>
                                        <div className={styles.col}>
                                            <p className={styles.subheading}>Contact Information</p>
                                            <p className={styles.paragraph}>Avery Park</p>
                                            <p className={styles.paragraph}>averyp@usc.edu</p>
                                            <p className={styles.paragraph}>+1 (561) 303 4937</p>
                                        </div>

                                        <div className={styles.col}>
                                            <p className={styles.subheading}>Payment Method</p>
                                            <p className={styles.paragraph}>Visa ---- ---- ---- 1234</p>
                                            <p className={styles.paragraph}>Exp 05/27</p>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.row}>
                                        <div className={styles.col}>
                                            <p className={styles.subheading}>Shipping Address</p>
                                            <p className={styles.paragraph}>Avery Park</p>
                                            <p className={styles.paragraph}>2585 S Hoover St</p>
                                            <p className={styles.paragraph}>Apt 3001</p>
                                            <p className={styles.paragraph}>Los Angeles, California 90007</p>
                                        </div>

                                        <div className={styles.col}>
                                            <p className={styles.subheading}>Billing Address</p>
                                            <p className={styles.paragraph}>Avery Park</p>
                                            <p className={styles.paragraph}>2585 S Hoover St</p>
                                            <p className={styles.paragraph}>Apt 3001</p>
                                            <p className={styles.paragraph}>Los Angeles, California 90007</p>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.col}>
                                            <p className={styles.subheading}>Shipping Method</p>
                                            <p className={styles.paragraph}>Standard</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <OrderSummary items={items} />
                    <div className = {styles.summary}>
                    <div className={continueShoppingButton.buttons}>
                            <button className="button red-btn stretch-btn" onClick={() => navigate('/shop')}>CONTINUE SHOPPING</button>
                            
                    </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmed;