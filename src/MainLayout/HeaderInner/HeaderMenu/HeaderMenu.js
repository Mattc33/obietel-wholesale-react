import React, { Component } from 'react';
import { Icon, Button } from 'antd';

class HeaderMenu extends React.Component {

    handleClick = (e) => {

    }

    render() {

        const headerMenuStyle = {
            'margin-left': 'auto',
            'padding-right': '20px',
            'margin-top': '5px'
        }

        return (
            <div style={headerMenuStyle}>
                <Button type="dashed" shape="circle" icon="home" size="large" />
            </div>
        );
        }
  }

  export default HeaderMenu;
