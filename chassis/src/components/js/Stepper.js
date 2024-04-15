import { useState } from 'react'
import styles from '../css/Stepper.module.css'

function Stepper({quantity}) {
    const [value, setValue] = useState(quantity);

    function decrement() {
        if (value-1 >= 1) {
            setValue(value - 1);
        }
    }

    function increment() {
        setValue(value + 1);
    }

    return (
        <div className={styles.stepper}>
            <button className={styles.box} onClick={decrement}>-</button>
            <input type="number" min={1} className={styles.box} value={value} />
            <button className={styles.box} onClick={increment}>+</button>
        </div>
    )
}

export default Stepper;