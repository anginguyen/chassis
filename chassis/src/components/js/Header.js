import { useState } from 'react'
import Search from './Search'
import Cart from '../../js/Cart'
import Filter from './Filter'
import styles from '../css/Header.module.css'
import cart_icon from '../../img/cart-icon--black.svg'
import filter_icon from '../../img/filter-icon.svg'

function Header({ title }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    function dismissCart() {
        setIsCartOpen(false);
    }

    function dismissFilter() {
        setIsFilterOpen(false);
    }

    const handleCartClick = () => {
        setIsCartOpen(true)
    }

    const handleFilterClick = () => {
        setIsFilterOpen(true);
    }

    const handleSearch = (selected) => {
        if (selected) console.log(selected);
    }  

    return (
        <>
            <Filter isOpen={isFilterOpen} dismiss={dismissFilter} />
            <Cart isOpen={isCartOpen} dismiss={dismissCart} />

            <div className={styles.header}>
                <p className={styles.title}>{title}</p>

                <div className={styles.row}>
                    <div className={styles.search}>
                        <Search handleSearch={handleSearch} />
                        <button className={styles.filters} onClick={handleFilterClick}><img src={filter_icon} alt="Filter icon" className={styles.filtericon} />Filter</button>
                    </div>

                    <button onClick={handleCartClick}><img src={cart_icon} alt="Cart icon" className={styles.carticon} /></button>
                </div>
            </div>
        </>
    )
}

export default Header;