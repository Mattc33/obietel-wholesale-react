import React from 'react';
import { Icon } from 'antd';

const EmptyInput = (props) => 
    <Icon 
        type="close-circle" 
        onClick={props.click} 
        id={props.id} 
    />

export default EmptyInput;