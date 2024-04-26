import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { supabase } from '../helpers/supabaseClient'
import styles from '../css/Shop.module.css'
import Header from '../components/js/Header'
import Card from '../components/js/Card'

function Shop() {
    const { query } = useParams();
    const [items, setItems] = useState([
        {
            id: 3,
            price: 13.49,
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
        {
            id: 4,
            price: 16.17,
            images: [
                "https://www.rockauto.com/info/33/DY_210L100_Fro.jpg"
            ],
            parts: {
                id: 5,
                name: "Timing Belt Kit",
                number: "06141-RLV-K00",
                description: "Timing belt kit for engine longevity"
            },
            vendors: {
                id: 2,
                name: "Rock Auto",
                url: "https://www.rockauto.com"
            }
        },
        {
            id: 12,
            price: 19.99,
            images: [
                "https://contentinfo.autozone.com/znetcs/product-info/en/US/chl/SA8755/image/8/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/chl/SA8755/2/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/chl/SA8755/3/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/chl/SA8755/4/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/chl/SA8755/5/image/10/"
              ],
            parts: {
                id: 2,
                name: "Engine Air Filter",
                number: "17220-5G0-A00",
                description: "Engine air filter for optimal performance"
            },
            vendors: {
                id: 4,
                name: "AutoZone",
                url: "https://www.autozone.com"
            }
        },
        {
            id: 20,
            price: 89.99,
            images: [
                "https://contentinfo.autozone.com/znetcs/product-info/en/US/drm/621-639/image/8/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/drm/621-639/2/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/drm/621-639/3/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/drm/621-639/4/image/10/"
            ],
            parts: {
                id: 11,
                name: "Radiator Fan Assembly",
                number: "19015-PZD-A00",
                description: "Radiator fan assembly for cooling efficiency"
            },
            vendors: {
                id: 4,
                name: "AutoZone",
                url: "https://www.autozone.com"
            }
        },
        {
            id: 21,
            price: 47.79,
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
            id: 33,
            price: 6.79,
            images: [
                "https://contentinfo.autozone.com/znetcs/product-info/en/US/tim/8835S/image/8/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/tim/8835S/2/image/10/",
                "https://contentinfo.autozone.com/znetcs/additional-prod-images/en/US/tim/8835S/3/image/10/"
            ],
            parts: {
                id: 94,
                name: "Rear Axle Seal",
                number: "91254-SE0-003",
                description: "Rear axle seal for differential oil sealing"
            },
            vendors: {
                id: 4,
                name: "AutoZone",
                url: "https://www.autozone.com"
            }
        },
        {
            id: 25,
            price: 29.99,
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
            `)
            .ilike('parts.name', `%${decodeURI(query)}%`);

        if (data) {
            setItems(data);
        }
    }

    const addItem = (item) => {
        setNumItems(numItems + 1);
        setAddedItem(item);
    }

    function dismissCart() {
        setAddedItem(null);
    }
    
    return (
        <div className="container">
            <Header title="Order Parts" addedItem={addedItem} dismissCartParam={dismissCart} />

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