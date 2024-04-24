import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import products from '../json/data.json';  // Import your data
import styles from '../css/ProductDetails.module.css'
import Rectangle36 from '../img/Rectangle 36.png'
import Rectangle47 from '../img/Rectangle 47.png'
import { motion } from "framer-motion";
import stylesShop from '../css/Shop.module.css'
import Header from '../components/js/Header'
import Card from '../components/js/Card'
import Stepper from '../components/js/Stepper'
import { addToCart } from '../helpers/cartUtils';


function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id, 10));
    const [quantity, setQuantity] = useState(1);  // State for quantity
    const [isHovering, setIsHovering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleAddToCart() {
        setIsLoading(true);
        // Simulate a network request with setTimeout
        setTimeout(() => {
          addToCart(1, quantity);
          setIsLoading(false);
        }, 1000);  // Adjust time as needed
      }
    if (!product) {
        return;
      }
      return (

        <div className={styles.container}>
            <div className = {styles.backgroundMaker}>
            <Header title="Part Details" />
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
                        <h1 className={styles.title}>{product.name}</h1>
                        <div className = {styles.separateTitle}>
                        <h2 className={styles.underlinedText}>From the ACDelco Store</h2>
                        <h3 className={styles.partNumber}>Part #41-162</h3>
                        </div>
                        <div className = {styles.deliveryDetails}>
                        <h3 className= {styles.deliveryDetails}> Delivery in 1 - 2 days </h3>
                        </div>
                    </div>
                    <div className={styles.productContentBottom}>
                    <div className = {styles.priceQuantity}>
                        <div className= {styles.sparkTotal}>
                            $11.99
                        </div>
                        <Stepper quantity={quantity} increment={increment} decrement={decrement} />
                    </div>
                    <button className={styles.buyNow}>BUY NOW</button>
                    <button
                        className={isHovering ? `${styles.addToCart} ${styles.hover}` : styles.addToCart}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={handleAddToCart}
                        disabled={isLoading}
                    >
                        {isLoading ? 'LOADING...' : 'ADD TO CART'}
                    </button>            
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.newContainer}>
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
                            41-162
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
                <div className={styles.verticaLine}></div>
                <div className = {styles.bottomRight}>
                    <div className= {styles.productSpecifications}>
                        Product Description
                    </div>
                    <div className = {styles.ProductDetails}>
                    ACDelco Professional Iridium Spark Plugs are a high quality replacement for many vehicles on the road today. They are our latest in spark plug technology and an exact replacement for your vehicle’s original components. Iridium composition provides a high melting point and great strength, and provides excellent wear resistance and durability. These premium aftermarket replacement spark plugs are manufactured to meet your expectations for fit, form, and function.
                    </div>
                </div>
                </div>
    
                
            </div>
            
        </div>
        // <div className={styles.container}>
        //     <Header title="Order Parts" />
        //     <h1 className={styles.title}>{product.name}</h1>
        //     <div classname = {styles.fit}>
        //         <div className = {styles.smallContainer}>
        //             <div className={styles.smallImage}>
        //                 <div>Hi there</div>
        //                 <div>hi there</div>
        //                 {/* <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
        //                 <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" />
        //                 <img className={styles.smallImage} src={Rectangle36} alt="Small Spark Plug 1" /> */}
        //             </div>
        //         </div>
        //         <div className= {styles.bigImage}>
        //             What's up
        //             {/* <img src={Rectangle36} alt="Big Spark Plug" /> */}
        //         </div>
        //     </div>
        //     <div className={styles.productInfo}>
        //         <p className={styles.price}>Price: ${product.price}</p>
        //         <p className={styles.quantity}>Quantity: {product.quantity}</p>
        //     </div>
        // </div>
        
    );
  }
  
  export default ProductDetails;
