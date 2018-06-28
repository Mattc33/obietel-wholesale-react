import React from 'react';
import styles from './LandingContent.css';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const LandingContent = () => {

    return (
        <Content>
            <div className={styles.showcaseContainer}>
                <div className={styles.callToAction}>
                    <div className={styles.textGroup}>
                        <h1 className={styles.h1}>A Marketplace for Telecom</h1>
                        <p>
                        The Obie Global Telecom Exchange Platform (Obie-X), is an Exchange where Carriers, mobile applications (OTTs) and Enterprise businesses can trade cost-effective quality telephone calling routes between countries 
                        - without the time-consuming contractual bureaucracy common to these transactions. Obie-X aims to become The Telecom Exchange where members can find, offer, or bid for the best deals (i.e., price and quality). 
                        </p>
                        <Link to="/registration" className={styles.getStartedButton}><Button type="primary" >Get Started</Button></Link>
                        <div className={styles.getStartedText}>
                            Already Registered? <Link to="/admin"><a>Sign In.</a></Link>
                        </div>
                    </div>
                    <div className={styles.showcaseImage}>
                        <img src="https://image.ibb.co/iLOSkJ/687474703a2f2f692e696d6775722e636f6d2f31786b576e32762e706e67.png" alt="687474703a2f2f692e696d6775722e636f6d2f31786b576e32762e706e67" border="0" />
                    </div>
                </div>
            </div>

            <div className={styles.hotRates}>
            </div>
            <div>
            </div>
        </Content>
    )
}

export default LandingContent;