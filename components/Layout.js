// components/Layout.js
import Link from 'next/link';
import styles from './Layout.module.css'; // Assuming you create a CSS module

const Layout = ({ children }) => {
    return (
        <div>
            <header className={styles.header}>
                {/* Removed logo */}
                <h1 className={styles.title}>NSS IT WINGS</h1>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/events" className={styles.link}>Events</Link>
                    <Link href="/gallery" className={styles.link}>Gallery</Link>
                    <Link href="/login" className={styles.link}>Login</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;

