import React from 'react';

import HeaderSearch from './HeaderSearch/HeaderSearch'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import UserAvatar from './UserAvatar/UserAvatar'

const HeaderInner = () => {

    const headerInnerStyle = {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'space-between'
    }

    return (
        <div style={headerInnerStyle}>
            <HeaderSearch />
            <HeaderMenu />
            <UserAvatar />
        </div>
    )
}

export default HeaderInner;