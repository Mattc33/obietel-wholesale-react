import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const HeaderSearch = () => {
    
    const searchInputStyle = {
        'width': '300px',
        'padding-left': '10px'
    }

    return (
        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={searchInputStyle}
        />
    )

}

export default HeaderSearch;