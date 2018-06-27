import React, { Component } from 'react';

import { Form, Icon, Row, Col, Select } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

const Option = Select.Option;

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
        this.props.setClick(this.handleSubmit)
    }

    emitEmptyHandler = (e) => {
        this.setState({ [e.target.id]: '' });
    }

    onChangeInputHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onChangeSelectHandler = (val) => {
        this.setState({billingCycle: val})
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {

        const bankNameSuffix = this.state.bankName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="bankName" /> : null;
        const accountHolderFullNameSuffix = this.state.accountHolderFullName ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="accountHolderFullName" /> : null;
        const routingNumberSuffix = this.state.routingNumber ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="routingNumber" /> : null;
        const accountNumberSuffix = this.state.accountNumber ? <Icon type="close-circle" onClick={this.emitEmptyHandler} id="accountNumber" /> : null;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}>
                        <Row><h1>Bank Information</h1></Row>
                        <Row>
                            <InputTextFormItem
                                text='* Bank Name:' span={24} placeholder='Enter Bank Name' 
                                suffix={bankNameSuffix} value={this.state.bankName} id="bankName"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Account Holder Full Name:' span={24} placeholder='Enter Account Holder Full Name' 
                                suffix={accountHolderFullNameSuffix} value={this.state.accountHolderFullName} id="accountHolderFullName"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Routing Number' span={24} placeholder='Enter Routing Number' 
                                suffix={routingNumberSuffix} value={this.state.routingNumber} id="routingNumber"
                                onChange={ this.onChangeInputHandler }
                            />
                            <InputTextFormItem
                                classProps={{'marginTop': '20px'}}
                                text='* Account Number' span={24} placeholder='Enter Account Number' 
                                suffix={accountNumberSuffix} value={this.state.accountNumber} id="accountNumber"
                                onChange={ this.onChangeInputHandler }
                                type='password'
                            />
                        </Row>
                    </Col>
                    <Col span={4} />
                    <Col span={10}>
                        <Row><h1>Billing Cycle</h1></Row>
                        <Row>
                            <span>* Default Billing Cycle: </span>
                            <Select onChange={this.onChangeSelectHandler} placeholder='Select default billing cycle'>
                                <Option value="7_7">7 / 7</Option>
                                <Option value="15_15">15 / 15</Option>
                                <Option value="30_15">30 / 15</Option>
                            </Select>
                        </Row>
                    </Col>
                </Row>
            </Form>
        )

    }
}

export default RegBilling;
