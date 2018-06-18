import React, { Component } from 'react';
import { Layout } from 'antd';

import LandingHeader from './LandingHeader/LandingHeader'

const { Content, Footer } = Layout;

class LandingPage extends Component {

    render() {

        const callToAction = {
            'height': '660px',
            'background': '#fff'
        }

        const hotRates = {
            'height': '600px',
            'background': '#F5F5F5'
        }

        const ourPartners = {

        }

        return (
            <Layout >
                <LandingHeader />

                <Content>
                    <div style={callToAction}>
                        <div>
                        </div>
                        <div>
                            <div>
                            </div>
                        </div>
                    </div>

                    <div style={hotRates}>
                    </div>

                    <div style={ourPartners}>
                    </div>
                </Content>

                <Footer>
                </Footer>
            </Layout>
        )
    }

}

export default LandingPage;
