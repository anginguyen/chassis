import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { supabase } from '../helpers/supabaseClient'
import styles from '../css/ProductDetails.module.css'
import Rectangle36 from '../img/Rectangle 36.png'
import Rectangle47 from '../img/Rectangle 47.png'
import Header from '../components/js/Header'
import Stepper from '../components/js/Stepper'
import { addToCart } from '../helpers/cartUtils';


function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);  // State for quantity
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchItem();
    }, [id]);

    async function fetchItem() {
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
            .eq('id', id);
        setProduct(data[0]);
    }

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function updateQuantity(value) {
        setQuantity(value);
    }

    function handleAddToCart() {
        setIsLoading(true);
        // Simulate a network request with setTimeout
        setTimeout(() => {
            addToCart(product, quantity);
            setIsLoading(false);
        }, 1000);  // Adjust time as needed
    }

    function handleBuyNow() {
        addToCart(product, quantity);
        navigate('/shop/checkout');
    }

    if (!product) {
        return;
    }

    return (
        <>
            <div className="container">
                <Header title="Part Details" />
            </div>

            <div className = {styles.backgroundMaker}>
                <div className={styles.productContainer}>
                <div className={styles.fit}>
                    <div className={styles.smallImageContainer}>
                        <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
                        <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
                        <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
                        <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
                        <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
                    </div>
                    <div>
                        <img className={styles.bigImage} src={Rectangle47} alt="Small Spark Plug 1" />
                    </div>
                    <div className = {styles.productContent}>
                        <div className={styles.productContentTop}>
                            <h1 className={styles.title}>{product.parts.name}</h1>
                            <div className = {styles.separateTitle}>
                                <span>From <a href={product.vendors.url} className={styles.underlinedText} target="_blank">{product.vendors.name}</a></span>
                                <h3 className={styles.partNumber}>Part #{product.parts.number}</h3>
                            </div>
                            <div className = {styles.deliveryDetails}>
                                <h3 className= {styles.deliveryDetails}> Delivery in 1 - 2 days </h3>
                            </div>
                        </div>
                        <div className={styles.productContentBottom}>
                            <div className = {styles.priceQuantity}>
                                <div className= {styles.sparkTotal}>
                                    ${product.price}
                                </div>
                                <Stepper quantity={quantity} increment={increment} decrement={decrement} update={updateQuantity} />
                            </div>
                            <button className={`button stretch-btn dark-btn ${styles.buyNow}`} onClick={handleBuyNow}>BUY NOW</button>
                            <button
                                className={`button stretch-btn grey-outline-btn ${styles.addToCart}`}
                                onClick={handleAddToCart}
                                disabled={isLoading}
                            >
                                {isLoading ? 'LOADING...' : 'ADD TO CART'}
                            </button>            
                        </div>
                    </div>
                </div>
                    <div className = {styles.bottom}>
                        <div className = {styles.bottomLeft}>
                            <div className= {styles.productSpecifications}>
                                Product Specifications
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Part#
                                </div>
                                <div className = {styles.productText}>
                                    {product.parts.number}
                                </div>
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Weight
                                </div>
                                <div className = {styles.productText}>
                                    0.4lbs
                                </div>
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Resistor Type
                                </div>
                                <div className = {styles.productText}>
                                    Yes
                                </div>
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Center Electrode Tip Material
                                </div>
                                <div className = {styles.productText}>
                                    Iridium
                                </div>
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Pre-Gap Size
                                </div>
                                <div className = {styles.productText}>
                                    0.04
                                </div>
                            </div>
                            <div className = {styles.productTextSeperator}>
                                <div className = {styles.productText}>
                                    Center Electrode Core Material
                                </div>
                                <div className = {styles.productText}>
                                    Copper
                                </div>
                            </div>
                        </div>

                        <div className = {styles.bottomRight}>
                            <div className= {styles.productSpecifications}>
                                Product Description
                            </div>
                            <div className = {styles.productDetails}>
                                {product.parts.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
