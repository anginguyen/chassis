import styles from '../css/Stepper.module.css'

function Stepper({ quantity, increment, decrement }) {
    function handleClick(event) {

        event.stopPropagation();
    }

    return (
        <div className={styles.stepper}>
            <button className={`${styles.box} ${styles.button}`} onClick={(event) => { event.stopPropagation(); decrement() }}>-</button>
            <input type="number" min={1} className={`${styles.box} ${styles.input}`} value={quantity} />
            <button className={`${styles.box} ${styles.button}`} onClick={(event) => { event.stopPropagation(); increment() }}>+</button>
        </div>
    )
}

export default Stepper;