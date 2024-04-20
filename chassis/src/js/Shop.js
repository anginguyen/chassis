import { motion } from "framer-motion";
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
    const cardContainerAnim = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const cardAnim = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }
    
    return (
        <div className="container">
            <Header title="Order Parts" />

            <motion.ul 
                className={styles.cardscontainer} 
                variants={cardContainerAnim} 
                initial="hidden"
                animate="visible"
            >
                {cards.map((card, index) => (
                    <motion.li className={styles.cardsbox} key={index} variants={cardAnim}>
                        <Card item={card} />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Shop;