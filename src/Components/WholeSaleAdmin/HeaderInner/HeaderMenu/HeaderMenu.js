import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {  Button } from 'antd';

class HeaderMenu extends Component {

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
                <Link to="/"><Button type="dashed" shape="circle" icon="home" size="large" /></Link>
            </div>
        );
        }
  }

  export default HeaderMenu;
