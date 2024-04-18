import { useState } from 'react'
import styles from '../css/Shop.module.css'
import Search from '../components/js/Search'
import Cart from './Cart'
import Card from '../components/js/Card'
import cart_icon from '../img/cart-icon--black.svg'
import Rectangle36 from '../img/Rectangle 36.png'

const cards = [
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
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
]

function Shop() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function dismiss() {
        setIsCartOpen(false);
    }

    function handleCartClick() {
        setIsCartOpen(!isCartOpen)
    }

    const handleSearch = (selected) => {
        if (selected) console.log(selected);
    }  

    return (
        <>
            <Cart isOpen={isCartOpen} dismiss={dismiss} />

            <div className="container">
                <p className={`title ${styles.title}`}>Order Parts</p>

                <div className={styles.search}>
                    <Search handleSearch={handleSearch} />
                    <button onClick={() => handleCartClick()}><img src={cart_icon} alt="Cart icon" className={styles.carticon} /></button>
                </div>

                <div className="cards-container">
                    {cards.map((card, index) => (
                    <div className="card-box" key={index}>
                        <Card item={card} />
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop;