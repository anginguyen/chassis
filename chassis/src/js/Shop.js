import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { supabase } from '../helpers/supabaseClient'
import styles from '../css/Shop.module.css'
import Header from '../components/js/Header'
import Card from '../components/js/Card'
import Rectangle36 from '../img/Rectangle 36.png'


function Shop() {
    const { query } = useParams();
    const [items, setItems] = useState([
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
    ]);
    const [numItems, setNumItems] = useState(0);
    const [addedItem, setAddedItem] = useState(null);

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

    useEffect(() => {
        if (query) {
            setItems([]);
            fetchData();
        }
    }, [query]);

    async function fetchData() {
        const { data } = await supabase
            .from('vendor_parts')
            .select(`
                id,
                price, 
                parts:part_id!inner (
                    id,
                    name,
                    number,
                    description
                ), 
                vendors:vendor_id (
                    id,
                    name,
                    url
                )
            `)
            .ilike('parts.name', `%${decodeURI(query)}%`);
        setItems(data);
    }

    const addItem = (item) => {
        setNumItems(numItems + 1);
        setAddedItem(item);
    }
    
    return (
        <div className="container">
            <Header title="Order Parts" addedItem={addedItem} />

            <motion.ul 
                className={styles.cardscontainer} 
                variants={cardContainerAnim} 
                initial="hidden"
                animate="visible"
            >
                {items.map((item, index) => (
                    <motion.li className={styles.cardsbox} key={index} variants={cardAnim}>
                        <Card item={item} addItem={addItem} />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Shop;