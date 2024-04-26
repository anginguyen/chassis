import Header from "../components/js/Header"
import OrderSummary from "../components/js/OrderSummary"
import CartItem from "../components/js/CartItem"
import styles from "../css/Payment.module.css"
import Rectangle36 from '../img/Rectangle 36.png'
import search from "../components/css/Search.module.css"
import { render } from 'react-dom';
import React from 'react';

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

function Payment({ order }) {
    return (
        <div className="container">
            <Header title="Payment" hasSearch={false} />

            <div className={styles.detailscontainer}>
                <div className={styles.left}>
                    <div className={styles.statement}>
                        <div className={styles.header}>
                            <p className={`${styles.title}`}>Your Details</p>
                            <p className={styles.subheading}>Shipping Address</p> 
                            <div className = {styles.detailContent}>
                                <input placeholder="Select Country/Region" className={styles.input} />
                                <div className={styles.inputGroup}>
                                <input placeholder="First Name" className={styles.input} />
                                <div className={styles.gap}></div> {/* Add a div to create a gap */}
                                <input placeholder="Last Name" className={styles.input} />
                                </div>
                                <input placeholder="Address" className={styles.input} />
                                <input placeholder="Apt, Suite, etc." className={styles.input} />
                                <div className={styles.inputGroup}>
                                <input placeholder="City" className={styles.input} />
                                <div className={styles.secondGap}></div> {/* Add a div to create a gap */}
                                <input placeholder="State" className={styles.input} />
                                <div className={styles.secondGap}></div> {/* Add a div to create a gap */}
                                <input placeholder="ZIP Code" className={styles.input} />
                                </div>
                                <input placeholder="Email" className={styles.input} />
                                <input placeholder="Phone (optional)" className={styles.input} />
                            </div>
                            <div className={styles.heightGap}></div> 
                            <p className={styles.subheading}>Shipping Method</p>
                            <div className = {styles.shippingBox}>
                            <div className = {styles.separate}>
                                <input className= {styles.checkBox}  type="checkbox" />
                                <p className = {styles.shippingText}>Standard Shipping (4-5 business days)</p>  
                            </div>
                            <p className = {styles.shippingText}>Free</p>                   
                            </div> 

                            <div className = {styles.shippingBox}>
                            <div className = {styles.separate}>
                                <input className= {styles.checkBox}  type="checkbox" />
                                <p className = {styles.shippingText}>Expedited Shipping (2-3 business days)</p>  
                            </div>
                            <p className = {styles.shippingText}>$10.99</p>                   
                            </div>
                                              
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <OrderSummary items={items} />
                </div>
            </div>
        </div>
    )
}

export default Payment;