import React from 'react';
import { Layout } from 'antd';

import LandingHeader from './LandingHeader/LandingHeader'
import LandingContent from './LandingContent/LandingContent'

const {  Footer } = Layout;

const LandingPage = () => {

    return (
        <Layout >
            <LandingHeader />
            <LandingContent />

            {/* <Footer>
            </Footer> */}
        </Layout>
    )

}

export default LandingPage;
