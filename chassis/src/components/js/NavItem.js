import { Link } from 'react-router-dom';
import styles from '../css/NavItem.module.css'

function NavItem({route}) {
    return (
        <div className={styles.navitem}>
            <Link to={route.path}>
                <img src={route.icon} alt={`${route.name} icon`} />
            </Link>
        </div>
    )
}

export default NavItem;