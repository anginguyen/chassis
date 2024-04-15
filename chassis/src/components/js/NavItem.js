import { NavLink } from 'react-router-dom';
import styles from '../css/NavItem.module.css'

function NavItem({route}) {
    return (
        <div className={styles.navitem}>
            <NavLink to={route.path}>
                <img src={route.icon} alt={`${route.name} icon`} />
            </NavLink>
        </div>
    )
}

export default NavItem;