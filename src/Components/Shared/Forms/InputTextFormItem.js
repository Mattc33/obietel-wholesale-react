import React from 'react';
import { Col, Input } from 'antd';

const InputTextFormItem = (props) => 
    <Col span={props.span}>
        <span>{props.text}</span>
        <Input
            placeholder={props.placeholder}
            prefix={props.prefix}
            suffix={props.suffix}
            value={props.value}
            id={props.id}
            onChange={ props.onChange }
        />
    </Col>

export default InputTextFormItem;