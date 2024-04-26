import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../helpers/supabaseClient';
import Header from "../components/js/Header"
import OrderSummary from "../components/js/OrderSummary"
import CartItem from "../components/js/CartItem"
import styles from "../css/OrderDetails.module.css"

const items = [
    {
        id: 21,
        price: 47.79,
        quantity: 1,
        images: [
            "https://www.rockauto.com/info/746/746_GD601_activant_0.jpg",
            "https://www.rockauto.com/info/746/746_GD601_activant_1.jpg",
            "https://www.rockauto.com/info/746/746_GD601_activant_2.jpg"
        ],
        parts: {
            id: 13,
            name: "Brake Rotors",
            number: "45251-SZT-A10",
            description: "Brake rotors for confident braking"
        },
        vendors: {
            id: 2,
            name: "RockAuto",
            url: "https://www.rockauto.com"
        }
    },
    {
        id: 25,
        price: 29.99,
        quantity: 1,
        images: [
            "https://images.oreillyauto.com/parts/img/large/obs/597.jpg"
        ],
        parts: {
            id: 23,
            name: "Rear Brake Shoes",
            number: "43153-S2A-010",
            description: "Rear brake shoes for parking brake function"
        },
        vendors: {
            id: 3,
            name: "O'Reilly Auto Parts",
            url: "https://www.oreillyauto.com"
        }
    },
    {
        id: 3,
        price: 13.49,
        quantity: 1,
        images: [
            "https://marvel-b1-cdn.bc0a.com/f00000000191392/media.lkqonline.com/ecomm/444/GMK4021242702K.jpg?height=400&width=400"
        ],
        parts: {
            id: 3,
            name: "Windshield Wiper Blades",
            number: "76622-T1W-A01",
            description: "Windshield wiper blades for clear visibility"
        },
        vendors: {
            id: 1,
            name: "LKQ",
            url: "https://www.lkqcorp.com"
        }
    },
    {
        id: 7,
        price: 10.49,
        quantity: 1,
        images: [
            "https://images.oreillyauto.com/parts/img/extralarge/ato/orly_xp103_404_bac.jpg",
            "https://images.oreillyauto.com/parts/img/extralarge/ato/orly_xp103_101_fro.jpg",
            "https://images.oreillyauto.com/parts/img/extralarge/ato/xp103_top.jpg"
        ],
        parts: {
            id: 6,
            name: "Spark Plugs",
            number: "12290-5R1-A01",
            description: "Spark plugs for efficient combustion"
        },
        vendors: {
            id: 3,
            name: "O'Reilly Auto Parts",
            url: "https://www.oreillyauto.com"
        }
    },
]

function OrderDetails() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [statusClass, setStatusClass] = useState(styles.processing);
    const [orderDate, setOrderDate] = useState("Apr 26, 2024");

    useEffect(() => {
        fetchOrder();
    }, []);

    async function fetchOrder() {
        const { data } = await supabase
            .from("orders")
            .select(`
                *,
                ordered_parts (
                    quantity,
                    vendor_parts:vendor_part_id (
                        id,
                        price, 
                        images,
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
                    )
                )
            `)
            .eq('id', orderId);
        setOrder(data[0]);
        
        setTimeout(() => {
            if ((data[0].status).includes("Attention")) {
                setStatusClass(styles.attention);
                setOrderDate("Apr 24, 2024");
            }
        }, 500);
    }

    return (
        <div className="container">
            <Header title="Your Orders" hasSearch={false} />
            {order && 
            <div className={styles.detailscontainer}>
                <div className={styles.left}>
                    <div className={styles.statement}>
                        <div className={styles.header}>
                            <p className={`${styles.title} ${statusClass}`}>{order.status}</p>
                            <p className={styles.subheading}>Order #{order.number}</p>
                            <p className={styles.paragraph}>{orderDate}</p>
                        </div>

                        <div className={styles.notification}>
                            <p className={styles.notificationtitle}>Some items you ordered are <span style={{fontWeight: 700}}>out of stock</span>:</p>

                            <div className={styles.item}>
                                <div className={styles.cartitem}>
                                    <CartItem item={items[0]} added={true} />
                                </div>

                                <div className={styles.options}>
                                    <button className="button small-btn blue-grey-btn">Change Vendor</button>
                                    <button className="button small-btn blue-grey-btn">Order from OEM</button>
                                    <button className={`button ${styles.blankbtn}`}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <div>
                                <p className={styles.heading}>Order Summary</p>

                                <div className={styles.total}>
                                    <p className={styles.subheading}>Total</p>
                                    <p className={styles.price}>${order.total}</p>
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
                </div>
            </div>
            }
        </div>
    )
}

export default OrderDetails;