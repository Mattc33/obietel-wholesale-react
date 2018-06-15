import React from 'react';

const Logo = () => {

    const style = {
        height: 64, width: 'auto',
        background: '#000',
        display: 'flex',
    }

    const logoStyle = {
        height: 45,
        margin: 'auto'
    }

    return (
        <div 
            className="logo"
            style={style}
        >
            <img 
                src={window.location.origin + '/img/obieTelLogo_white.png'} 
                alt="obie logo"
                style={logoStyle}
            />
        </div>
    )

}

export default Logo;