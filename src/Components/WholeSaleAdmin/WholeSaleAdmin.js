import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

import Sidebar from './Sidebar/Sidebar';
import HeaderInner from './HeaderInner/HeaderInner';

const { Header, Content, Footer, Sider } = Layout;

class WholeSaleAdmin extends Component {
    
    state = {
        collapsed: false,
        rightLayoutWidth: '200px'
    };

    onCollapseHandler = (collapsed) => {
        this.setState({ collapsed });
        this.state.collapsed ? this.setState({ rightLayoutWidth: '200px' }) : 
            this.setState({ rightLayoutWidth: '80px' })
    }

    render() {

        const siderStyle = {
            'overflow': 'auto', 
            'min-height': '100vh', 
            'position': 'fixed', 
            'left': 0,
            'overflow-x': 'hidden'
        }

        const rightLayoutStyle = {
            'margin-left': this.state.rightLayoutWidth
        }

        const headerStyle = {
            'width': '100%',
            'background': '#fff',
            'padding': 0
        }

        const contentStyle = {
            'margin': '0 10px 20px 10px', 
        }

        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Sider
                    theme="light"
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapseHandler}
                    style={siderStyle}
                >
                    
                    <Sidebar />
                </Sider>

                <Layout style={rightLayoutStyle}>

                    <Header style={headerStyle}>
                        <HeaderInner />
                    </Header>

                    <Content style={contentStyle}>
                        <Breadcrumb style={{ margin: '16px', 'text-align': 'left' }}>
                            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 1360 }}>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    </Footer>
                </Layout>
                
            </Layout>
        );
    }
}

export default WholeSaleAdmin;