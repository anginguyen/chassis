import { Navbar } from "react-bootstrap";
import styles from '../css/Nav.module.css'
import NavItem from "../components/js/NavItem";

function Nav({routes}) {
    return (
        <Navbar className={`nav-bar ${styles.nav}`}>
            {routes.map((route) => 
                <NavItem route={route} />
            )}
        </Navbar>
    )
}

export default Nav;