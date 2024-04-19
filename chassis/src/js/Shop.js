import styles from '../css/Shop.module.css'
import Header from '../components/js/Header'
import Card from '../components/js/Card'
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
        id: 7,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 8,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 9,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 10,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 11,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
    {
        id: 12,
        img: Rectangle36,
        name: "ACDelco Iridium Spark Plug",
        price: "11.99",
        quantity: 4
    },
]

function Shop() {
    return (
        <div className="container">
            <Header title={"Order Parts"} />

            <div className={styles.cardscontainer}>
                {cards.map((card, index) => (
                    <div className={styles.cardsbox} key={index}>
                        <Card item={card} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;