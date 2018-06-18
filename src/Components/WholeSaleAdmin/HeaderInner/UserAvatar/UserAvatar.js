import React, { Component } from 'react';
import Radium from 'radium'
import { Avatar, Badge, Icon, Dropdown, Menu } from 'antd';

class UserAvatar extends Component {

    state = {
        alertCount: 1,
        user: 
            {
                role: 'administrator'
            },
        bids:
            {
                count: 12
            }
    }

    render() {

        const containerStyle = {
            'padding-right': '10px',
            'user-select': 'none',
            ':hover': {
                'cursor': 'pointer',
                'color': 'green'
            }
        }

        const caretDownStyle = {
            'padding-left': '5px',
            'color': '#ccc',
            'fontSize': '9px',
        }

        const avatarMenuStyle = {
            'margin-top': '50px'
        }

        const menuTitleStyle = {
            'width': '200px',
            'padding': '5px 10px 5px 10px',
            'display': 'inline-block'
        }

        const iconStyle = {
            'padding-right': '5px'
        }

        const menu = (
            <Menu style={menuTitleStyle}>
                <div style={menuTitleStyle}>
                    <div style={{'color': '#4290F7'}}>Hello, User</div>
                    <div style={{'font-weight': 'bold'}}>Role:
                        <span style={{'font-weight': 'normal'}}> {this.state.user.role}</span>
                    </div>
                </div>
                <Menu.Divider />
                <div style={menuTitleStyle}>
                    <span style={{'font-weight': 'bold', 'padding-right': '5px'}}>Bids:</span>
                    <Badge count={this.state.bids.count} style={{ backgroundColor: '#52c41a' }} />
                </div>
                <Menu.Divider />
                    <Menu.Item key="0">
                        <Icon type="user" style={iconStyle} />Edit Profile
                    </Menu.Item>
                <Menu.Divider />
                    <Menu.Item key="3">
                        <Icon type="logout" style={iconStyle} />Logout
                    </Menu.Item>
            </Menu>
        );

        return (
            <div style={containerStyle}>
                <Dropdown overlay={menu} trigger={['click']} style={avatarMenuStyle}>
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

