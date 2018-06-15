import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './Sidebar.css';
import Logo from './Logo/Logo';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends Component {
    navClickHandler = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <Menu 
                theme="light" 
                defaultSelectedKeys={['1']} 
                mode="inline"

                onClick={this.navClickHandler}
                style = {{'textAlign': 'left', 'user-select': 'none'}}
            >

                <Logo />

                <Menu.Item key="1">
                    <Icon 
                        type="dashboard" 
                    />
                    <span>Dashboard</span>
                </Menu.Item>

                <Menu.Item key="2">
                    <Icon type="appstore" />
                    <span>Market</span>
                </Menu.Item>

                <Menu.Item key="3">
                    <Icon type="area-chart" />
                    <span>Bids & Triggers</span>
                </Menu.Item>

                <SubMenu
                    key="sub1"
                    title={<span><Icon type="question-circle-o" /><span>Help Center</span></span>}
                >
                    <Menu.Divider />
                    <Menu.Item key="4">FAQ</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="5">Policy</Menu.Item>
                </SubMenu>

                <Menu.Item key="6">
                    <Icon type="setting" />
                    <span>Settings</span>
                </Menu.Item>
            </Menu>
        );
    }
}
  
export default Sidebar;