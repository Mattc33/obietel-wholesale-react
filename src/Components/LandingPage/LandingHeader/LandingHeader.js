import React from 'react';
import styles from './LandingHeader.css'
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';


const { Header } = Layout;

const LandingHeader = () => {

    const menuItemStyle = {
        'border-bottom': 'none'
    }

    return (
        <Header styleName='' style={{background: '#fff'}}>
            <div style={{'font-weight': 'bold'}}>ObieTel</div>
            <Menu
                theme="light"
                mode="horizontal"
                style={{ lineHeight: '64px', 'margin-left': 'auto', 'border': 'none' }}
            >
                <Menu.Item style={menuItemStyle} key="1">Why ObieTel?</Menu.Item>
                <Menu.Item style={menuItemStyle} key="2">About Us</Menu.Item>
                <Menu.Item style={menuItemStyle} key="3"><Link to="/admin">Login</Link></Menu.Item>
                <Menu.Item style={menuItemStyle} key="4">Register</Menu.Item>
            </Menu>
        </Header>
    )
}

export default LandingHeader;