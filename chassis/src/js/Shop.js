import { useState } from 'react'
import styles from '../css/Shop.module.css'
import Search from '../components/js/Search'
import Cart from './Cart'
import Card from '../components/js/Card'
import cart_icon from '../img/cart-icon--black.svg'
import Rectangle36 from '../img/Rectangle 36.png'

const items = [
    {
        name: "ACDelco Iridium Spark Plug",
        img: require("../img/Rectangle 36.png"),
        price: "$11.99",
        quantity: 1,
    },
    {
        name: "ACDelco Iridium Spark Plug Blah Blah Blah Blah",
        img: require("../img/Rectangle 36.png"),
        price: "$11.99",
        quantity: 2
    },
    {
        name: "ACDelco Iridium Spark Plug",
        img: require("../img/Rectangle 36.png"),
        price: "$11.99",
        quantity: 4
    },
    {
        name: "ACDelco Iridium Spark Plug",
        img: require("../img/Rectangle 36.png"),
        price: "$11.99",
        quantity: 4
    },
    {
        name: "ACDelco Iridium Spark Plug",
        img: require("../img/Rectangle 36.png"),
        price: "$11.99",
        quantity: 4
    }
]

const cards = [
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

    const handleSearch = (selected) => {
        console.log(selected);
    }  

    return (
        <>
            <Cart items={items} isOpen={isCartOpen} dismiss={dismiss} />

            <div className="container">
                <p className={`title ${styles.title}`}>Order Parts</p>

                <div className={styles.search}>
                    <Search handleSearch={handleSearch} />
                    <button onClick={() => setIsCartOpen(!isCartOpen)}><img src={cart_icon} alt="Cart icon" className={styles.carticon} /></button>
                </div>

                <div className="cards-container">
                    {cards.map((card, index) => (
                    <div className="card-box" key={index}>
                        <Card img={card.img} name={card.name} price={card.price} quantity = {card.quantity}/>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop;