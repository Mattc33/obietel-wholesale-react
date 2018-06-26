import React, { Component } from 'react';

import { Form, Icon, Row, Col } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

class RegBilling extends Component {
    
    state = {
        // * Bank Details
            bankName: '',
            accountHolderFullName: '',
            routingNumber: '',
            accountNumber: '',
        // * Billing Details
            billingCycle: ''
    }

    componentDidMount() {
    }

    emitEmptyHandler = (e) => {
        this.setState({ [e.target.id]: '' });
    }

    onChangeInputHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = () => {
        console.log('form is submitted');
    }

    render() {

        const bankNameSuffix = this.state.bankName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="bankName" /> : null;
        const accountHolderFullNameSuffix = this.state.accountHolderFullName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="accountHolderFullName" /> : null;
        const routingNumberSuffix = this.state.routingNumber ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="routingNumber" /> : null;
        const accountNumberSuffix = this.state.accountNumber ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="accountNumber" /> : null;
        const billingCycleSuffix = this.state.billingCycle ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="billingCycle" /> : null;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}>
                        
                    </Col>
                    <Col span={4} />
                    <Col span={10}>

                    </Col>
                </Row>
            </Form>
        )

    }


}

export default RegBilling;
