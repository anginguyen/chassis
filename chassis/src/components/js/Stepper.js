import styles from '../css/Stepper.module.css'

function Stepper({ quantity, increment, decrement }) {
    return (
        <div className={styles.stepper}>
            <button className={`${styles.box} ${styles.button}`} onClick={decrement}>-</button>
            <input type="number" min={1} className={`${styles.box} ${styles.input}`} value={quantity} />
            <button className={`${styles.box} ${styles.button}`} onClick={increment}>+</button>
        </div>
    )
}

export default Stepper;