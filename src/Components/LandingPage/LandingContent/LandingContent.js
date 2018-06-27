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
                    <h1 className={styles.h1}>A Marketplace for Carriers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sed vel veniam a officiis? Explicabo ullam, molestiae illo consequatur deserunt dolorum unde, blanditiis non sed vero, modi eaque sunt fugit quae! Fugiat molestiae non quo aperiam, nemo provident, fugit distinctio minus molestias nam qui expedita, eius exercitationem rem iusto autem placeat doloremque et libero voluptatem. Molestias quidem tempore impedit necessitatibus?</p>
                    <Link to="/registration"><Button type="primary" className={styles.getStartedButton}>Get Started</Button></Link>
                    <div className={styles.getStartedText}>
                        Already Registered? <Link to="/admin"><a>Sign In.</a></Link>
                    </div>
                </div>
                <div className={styles.showcaseImage}>
                    <img src="https://image.ibb.co/iLOSkJ/687474703a2f2f692e696d6775722e636f6d2f31786b576e32762e706e67.png" alt="687474703a2f2f692e696d6775722e636f6d2f31786b576e32762e706e67" border="0" />
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