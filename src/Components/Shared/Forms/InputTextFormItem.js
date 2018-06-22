import React from 'react';
import { Col, Input } from 'antd';

const InputTextFormItem = (props) => {

    return (
        <Col span={props.span} style={props.classProps}>
            <span>{props.text}</span>
            <Input
                placeholder={props.placeholder}
                prefix={props.prefix}
                suffix={props.suffix}
                value={props.value}
                id={props.id}
                onChange={props.onChange}
                type={props.type}
            />
        </Col>
    )
}

export default InputTextFormItem;
