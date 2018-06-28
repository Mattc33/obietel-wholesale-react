import React from 'react';
import styles from './LandingHeader.css'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const LandingHeader = () => {

    const headerStyle = {
        background: '#fff',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignContent: 'space-between',
        userSelect: 'none'
      }

    return (
        <Header style={headerStyle}>
            <div className={styles.logo}>
                <Link to="/" className={styles.link}><h3>ObieTel</h3></Link>
            </div>
            <ul className={styles.menu}>
                <li>Why ObieTel?</li>
                <li>Pricing?</li>
                <li>About Us</li>
                <Link to="/admin" className={styles.link}><li>Login</li></Link>
                <Link to="/registration" className={styles.link}><li>Register</li></Link>
            </ul>
            <div className={styles.menuHamburger}><i className="fas fa-bars"></i></div>
        </Header>
    )
}

export default LandingHeader;