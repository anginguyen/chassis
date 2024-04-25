import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../helpers/supabaseClient";
import Header from "../components/js/Header";
import OrderCard from "../components/js/OrderCard";
import styles from "../css/Orders.module.css";

function OrderStatus() {
    const [orders, setOrders] = useState([]);

    const cardContainerAnim = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const cardAnim = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    // useEffect(() => {
    //     getOrders();
    // }, []);

    async function getOrders() {
        const { data } = await supabase
            .from("orders")
            .select(`
                *,
                parts_ordered (
                    car_parts:car_part_id (
                        name
                    ),
                    quantity
                )
            `);
        setOrders(data);
    }

    return (
        <div class="container">
            <Header title="Your Orders" hasSearch={false} />

            <div className={styles.page}>
                <div className={styles.section}>
                    <p className={styles.title}>Orders in Progress</p>

                    <motion.ul 
                        className={styles.orders} 
                        variants={cardContainerAnim} 
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li key={1} variants={cardAnim}>
                            <OrderCard />
                        </motion.li>

                        <motion.li key={2} variants={cardAnim}>
                            <OrderCard />
                        </motion.li>
                    </motion.ul >
                </div>
            </div>

            {/* {orders.map((order) => 
                <OrderCard order={order} key={order.id} />
            )} */}
        </div>
    )
}

export default OrderStatus;