import React, { Component } from 'react';

import { Form, Icon, Row, Col, Select, Input } from 'antd';
import InputTextFormItem from '../../../Shared/Forms/InputTextFormItem';

const Option = Select.Option;
const FormItem = Form.Item;

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

        const { getFieldDecorator } = this.props.form;


        const bankNameInput = (
            <FormItem label='Bank Name:'>
            {
                getFieldDecorator('bankName', 
                    {rules: [{required: true, message: "Please input a bank name.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Bank Name'
                            suffix={bankNameSuffix}
                            value={this.state.bankName}
                            id='bankName'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const accountHolderFullNameInput = (
            <FormItem label='Account Holder Full Name:'>
            {
                getFieldDecorator('accountHolderFullName', 
                    {rules: [{required: true, message: "Please input account holder name.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter First Name'
                            suffix={accountHolderFullNameSuffix}
                            value={this.state.accountHolderFullName}
                            id='accountHolderFullName'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const routingNumberInput = (
            <FormItem label='Routing number:'>
            {
                getFieldDecorator('routingNumber', 
                    {rules: [{required: true, message: "Please input routing number.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Routing Number'
                            suffix={routingNumberSuffix}
                            value={this.state.routingNumber}
                            id='routingNumber'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        const accountNumberInput = (
            <FormItem label='Account Number:'>
            {
                getFieldDecorator('accountNumber', 
                    {rules: [{required: true, message: "Please input account number.",}]}
                ) ( 
                    <span>
                        <Input
                            placeholder='Enter Account Number'
                            suffix={accountNumberSuffix}
                            value={this.state.accountNumber}
                            id='accountNumber'
                            onChange={this.onChangeInputHandler}
                        />
                    </span>
                )
            } 
            </FormItem>
        )

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={10}>
                        <Row><h1>Bank Information</h1></Row>
                        <Row>
                            <Col span={24}>
                                {bankNameInput}
                            </Col>
                            <Col span={24}>
                                {accountHolderFullNameInput}
                            </Col>

                            <Col span={24}>
                                {routingNumberInput}
                            </Col>

                            <Col span={24}>
                                {accountNumberInput}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} />
                    <Col span={10}>
                        <Row><h1>Billing Cycle</h1></Row>
                        <FormItem label="Default Billing Cycle:">     
                            {       
                                getFieldDecorator('billingCycle', 
                                {rules: [{required: true, message: "Please select a default billing cycle."}]}
                            ) ( 
                            <Select onChange={this.onChangeSelectHandler} placeholder='Select default billing cycle'>
                                <Option value="7_7">7 / 7</Option>
                                <Option value="15_15">15 / 15</Option>
                                <Option value="30_15">30 / 15</Option>
                            </Select>
                            )
                            }
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Form.create()(RegBilling);
