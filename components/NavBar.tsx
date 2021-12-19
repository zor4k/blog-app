import Link from 'next/link';
import styles from '../styles/navbar.module.css';

function NavBar(){
    return(
        <nav className={styles.navbar} > 
            <ul >
                <li >
                    <Link href="/" >Posts</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;