import React, { Component } from 'react';
import Radium from 'radium'
import { Avatar, Badge, Icon, Dropdown, Menu } from 'antd';

class UserAvatar extends Component {

    state = {
        alertCount: 1
    }

    render() {

        const containerStyle = {
            'padding-right': '10px',
            'user-select': 'none',
            ':hover': {
                'cursor': 'pointer'
            }
        }

        const caretDownStyle = {
            'padding-left': '5px',
            'color': '#ccc',
            'fontSize': '9px',
            ':hover': {
                'color': '#eee'
            }
        }

        const avatarMenuStyle = {

        }

        const menuTitleStyle = {
            'padding': '0 5px 0 5px'
        }

        const menu = (
            <Menu style={menuTitleStyle}>
                <div style={menuTitleStyle}>
                    Hello, User
                </div>
                <Menu.Divider />
                <Menu.Item key="0">
                    <a href="#">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="#">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">Logout</Menu.Item>
            </Menu>
        );

        return (
            <div style={containerStyle}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <span>
                        <Badge count={this.state.alertCount}><Avatar shape="square" size="large" icon="user" /></Badge>
                        <Icon type="caret-down" style={caretDownStyle} />
                    </span>
                </Dropdown>
            </div>
        )

    }

}

UserAvatar = Radium(UserAvatar)
export default UserAvatar;

