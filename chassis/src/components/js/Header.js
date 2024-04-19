import { useState } from 'react'
import Search from './Search'
import Cart from '../../js/Cart'
import styles from '../css/Header.module.css'
import cart_icon from '../../img/cart-icon--black.svg'

function Header({ title }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function dismiss() {
        setIsCartOpen(false);
    }

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen)
    }

    const handleSearch = (selected) => {
        if (selected) console.log(selected);
    }  

    return (
        <>
            <Cart isOpen={isCartOpen} dismiss={dismiss} />

            <div className={styles.header}>
                <p className={styles.title}>{title}</p>

                <div className={styles.search}>
                    <Search handleSearch={handleSearch} />
                    <button onClick={handleCartClick}><img src={cart_icon} alt="Cart icon" className={styles.carticon} /></button>
                </div>
            </div>
        </>
    )
}

export default Header;